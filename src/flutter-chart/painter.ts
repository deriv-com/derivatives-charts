// This is a temporary fix. We'll need to remove the reset from the _playNewTickAnimation method
// in the ../flutter-chart/lib/src/deriv_chart/chart/basic_chart.dart file which is the correct way to fix this.

type TPainterCallback = (currentTickPercent: number) => void;
// [AI]
type TPainterCallbackEntry = {
    callback: TPainterCallback;
    useSmoothAnimation: boolean;
};
// [AI]
export default class Painter {
    callbacks: TPainterCallbackEntry[] = [];

    onPaint = (currentTickPercent: number) => {
        this.callbacks.forEach(entry => {
            // [AI]
            if (entry.useSmoothAnimation) {
                entry.callback(0);
            } else {
                entry.callback(currentTickPercent);
            }
            // [AI]
        });
    };

    registerCallback = (callback: TPainterCallback, useSmoothAnimation = false) => {
        this.callbacks.push({ callback, useSmoothAnimation });
    };

    unregisterCallback = (callback: TPainterCallback) => {
        const index = this.callbacks.findIndex(item => item.callback === callback);
        this.callbacks.splice(index, 1);
    };
}
