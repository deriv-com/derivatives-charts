import debounce from 'lodash-es/debounce';
import { action, observable, when, makeObservable } from 'mobx';
import MainStore from '.';
import Context from '../components/ui/Context';
import { TCustomEvent } from '../types';

let activeDialog: DialogStore | undefined;

export default class DialogStore {
    mainStore: MainStore;
    open = false;

    constructor(mainStore: MainStore) {
        makeObservable(this, {
            open: observable,
            openDialog: action.bound,
            register: action.bound,
            unregister: action.bound,
            onContainerClick: action.bound,
            updateCloseCallback: action.bound,
            updateOutsideClickCallback: action.bound,
            outsideClickCallback: observable,
        });

        this.mainStore = mainStore;
        when(
            () => !!this.context,
            () => {
                this.routingStore.registerDialog(this);
            }
        );
    }

    get context(): Context | null {
        return this.mainStore.chart.context;
    }
    get routingStore() {
        return this.mainStore.routing;
    }

    onClose = () => this.setOpen(false);
    outsideClickCallback = () => this.setOpen(false);
    setOpen = debounce(
        (val: boolean) => {
            this.openDialog(val);
        },
        10,
        { leading: true, trailing: false }
    );

    openDialog(val: boolean) {
        if (this.open !== val) {
            this.open = val;
            if (this.open) {
                // As we combine dialogs with the menu, so for opening
                // the items which has no menu, this trigger right after
                // firing open action, this delay prevent that issue.
                setTimeout(this.register, 100);
            } else {
                this.unregister();
            }

            if (val === true) {
                // close active dialog.
                if (activeDialog) {
                    activeDialog.openDialog(false);
                }
                activeDialog = this;
            } else {
                activeDialog = undefined;
            }
        }
    }

    updateOutsideClickCallback(newCallback?: (() => void) | undefined) {
        if (newCallback !== undefined) {
            this.outsideClickCallback = newCallback;
        }
    }

    handleClickOutside = (e: React.MouseEvent | Event | UIEvent | TCustomEvent) => {
        let isRightClick = false;
        if ('which' in e) {
            isRightClick = e.which === 3;
        } else if ('button' in e) {
            isRightClick = e.button === 2;
        }

        if (!(e as TCustomEvent).isHandledByDialog && !isRightClick) {
            this.outsideClickCallback();
        }
    };
    closeOnEscape = (e: React.KeyboardEvent | Event) => {
        const ESCAPE = 27;
        if ((e as React.KeyboardEvent).keyCode === ESCAPE) {
            this.onClose();
        }
    };

    register() {
        document.addEventListener('click', this.handleClickOutside, false);
        document.addEventListener('keydown', this.closeOnEscape, false);
    }

    unregister() {
        document.removeEventListener('click', this.handleClickOutside);
        document.removeEventListener('keydown', this.closeOnEscape);
    }

    onContainerClick(e: React.MouseEvent | TCustomEvent) {
        /* TODO: why stopPropagation() is not working ಠ_ಠ */
        // e.stopPropagation();
        (e as TCustomEvent).nativeEvent.isHandledByDialog = true;
    }

    updateCloseCallback(onClose: (() => void) | undefined) {
        if (onClose !== undefined) {
            this.onClose = onClose;
        }
    }
}
