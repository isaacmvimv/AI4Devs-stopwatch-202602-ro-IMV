"use strict";

/*
StopWatch Controller
Gestión del estado y lógica del cronómetro
*/

class Stopwatch {

    constructor(displayElement, msElement) {
        this.displayElement = displayElement;
        this.msElement = msElement;

        this.startTime = 0;
        this.elapsedTime = 0;
        this.timerId = null;

        this.state = "idle"; // idle | running | paused
    }

    start() {
        try {

            this.startTime = performance.now();
            this.state = "running";

            this.timerId = requestAnimationFrame(this.update.bind(this));

        } catch (error) {
            console.error("Error al iniciar el cronómetro", error);
        }
    }

    pause() {
        if (this.state !== "running") return;

        cancelAnimationFrame(this.timerId);

        this.elapsedTime += performance.now() - this.startTime;
        this.state = "paused";
    }

    continue() {

        if (this.state !== "paused") return;

        this.startTime = performance.now();
        this.state = "running";

        this.timerId = requestAnimationFrame(this.update.bind(this));
    }

    clear() {

        cancelAnimationFrame(this.timerId);

        this.startTime = 0;
        this.elapsedTime = 0;
        this.state = "idle";

        this.renderTime(0);
    }

    update() {

        if (this.state !== "running") return;

        const currentTime = performance.now();
        const totalElapsed = this.elapsedTime + (currentTime - this.startTime);

        this.renderTime(totalElapsed);

        this.timerId = requestAnimationFrame(this.update.bind(this));
    }

    renderTime(milliseconds) {

        const ms = Math.floor(milliseconds % 1000);
        const totalSeconds = Math.floor(milliseconds / 1000);

        const seconds = totalSeconds % 60;
        const minutes = Math.floor(totalSeconds / 60) % 60;
        const hours = Math.floor(totalSeconds / 3600);

        this.displayElement.textContent =
            `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;

        this.msElement.textContent = this.padMs(ms);
    }

    pad(number) {
        return number.toString().padStart(2, "0");
    }

    padMs(number) {
        return number.toString().padStart(3, "0");
    }
}

/* ==========================
   Inicialización App
========================== */

document.addEventListener("DOMContentLoaded", () => {

    const display = document.getElementById("display");
    const msDisplay = document.getElementById("milliseconds");

    const primaryButton = document.getElementById("primaryButton");
    const clearButton = document.getElementById("clearButton");

    const stopwatch = new Stopwatch(display, msDisplay);

    stopwatch.renderTime(0);

    primaryButton.addEventListener("click", () => {

        switch (stopwatch.state) {

            case "idle":
                stopwatch.start();
                setButtonState("pause");
                break;

            case "running":
                stopwatch.pause();
                setButtonState("continue");
                break;

            case "paused":
                stopwatch.continue();
                setButtonState("pause");
                break;
        }

    });

    clearButton.addEventListener("click", () => {
        stopwatch.clear();
        setButtonState("start");
    });

    function setButtonState(state) {

        primaryButton.classList.remove("btn-start","btn-pause","btn-continue");

        if(state === "start"){
            primaryButton.textContent = "Start";
            primaryButton.classList.add("btn-start");
        }

        if(state === "pause"){
            primaryButton.textContent = "Pause";
            primaryButton.classList.add("btn-pause");
        }

        if(state === "continue"){
            primaryButton.textContent = "Continue";
            primaryButton.classList.add("btn-continue");
        }
    }

});