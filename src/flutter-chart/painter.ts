// This is a temporary fix. We'll need to remove the reset from the _playNewTickAnimation method
// in the ../flutter-chart/lib/src/deriv_chart/chart/basic_chart.dart file which is the correct way to fix this.

// [AI]
type TPainterCallback = (currentTickPercent: number) => void;
type TPainterCallbackEntry = {
    callback: TPainterCallback;
    useSmoothAnimation: boolean;
};

export default class Painter {
    callbacks: TPainterCallbackEntry[] = [];

    private duration = 300; // Duration of the animation in ms
    private animationFrameId: number | null = null;

    private lastProgress = 1; // Last known tick percent (0.0 - 1.0)
    private startTime: number | null = null;
    private startProgress = 1;

    onPaint = (currentTickPercent: number) => {
        this.callbacks.forEach(entry => {
            if (entry.useSmoothAnimation) {
                this.playTickAnimation();
            } else {
                // Immediately call non-smooth callbacks
                this.notifyCallbacks(currentTickPercent, [entry]);
            }
        });
    };

    registerCallback = (callback: TPainterCallback, useSmoothAnimation = false) => {
        this.callbacks.push({ callback, useSmoothAnimation });
    };

    unregisterCallback = (callback: TPainterCallback) => {
        const index = this.callbacks.findIndex(item => item.callback === callback);
        this.callbacks.splice(index, 1);
    };

    private notifyCallbacks(currentTickPercent: number, callbacks: TPainterCallbackEntry[]) {
        callbacks.forEach(entry => {
            entry.callback(currentTickPercent);
        });
    }

    /**
     * Starts a smooth tick animation from current progress to 1.
     * Only callbacks that opted in for smooth animation will be animated.
     * Others will be called immediately with progress = 1.
     */
    private playTickAnimation() {
        if (this.animationFrameId !== null) {
            this.startProgress = this.lastProgress;
        } else {
            this.startProgress = 0;
        }

        this.startTime = performance.now();

        // Animate only smooth callbacks
        this.animate();
    }

    /**
     * Cancels any ongoing animation.
     */
    public cancelAnimation() {
        if (this.animationFrameId !== null) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
    }

    /**
     * Animation loop using requestAnimationFrame for smooth callbacks.
     */
    private animate = () => {
        if (this.startTime === null) return;

        const now = performance.now();
        const elapsed = now - this.startTime;

        let progress = this.startProgress + (1 - this.startProgress) * (elapsed / this.duration);
        progress = Math.min(progress, 1);

        // Only notify smooth callbacks
        this.notifyCallbacks(
            progress,
            this.callbacks.filter(entry => entry.useSmoothAnimation)
        );

        if (progress < 1) {
            this.animationFrameId = requestAnimationFrame(this.animate);
        } else {
            this.cancelAnimation(); // clean up
        }
    };
}
// [/AI]
