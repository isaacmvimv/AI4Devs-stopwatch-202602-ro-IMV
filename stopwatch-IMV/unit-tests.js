/**
 * unit-tests.js
 * Ejecuta tests unitarios para la lógica del StopWatch
 * Genera un fichero Markdown con los resultados
 */

const fs = require("fs")

/* =========================
   Mock de Stopwatch
   (misma lógica del script)
========================= */

class Stopwatch {

    constructor() {
        this.startTime = 0
        this.elapsedTime = 0
        this.state = "idle"
    }

    start() {
        this.startTime = performance.now()
        this.state = "running"
    }

    pause() {
        if (this.state !== "running") return
        this.elapsedTime += performance.now() - this.startTime
        this.state = "paused"
    }

    continue() {
        if (this.state !== "paused") return
        this.startTime = performance.now()
        this.state = "running"
    }

    clear() {
        this.startTime = 0
        this.elapsedTime = 0
        this.state = "idle"
    }

    pad(n) {
        return n.toString().padStart(2,"0")
    }

    padMs(n){
        return n.toString().padStart(3,"0")
    }

}

/* =========================
   Test Runner
========================= */

const results = []

function runTest(name, fn){

    const time = new Date().toLocaleTimeString()

    try{

        fn()

        results.push({
            name,
            time,
            status:"PASS"
        })

    }catch(error){

        results.push({
            name,
            time,
            status:"FAIL"
        })

    }

}

/* =========================
   Tests
========================= */

runTest("Initial state is idle", () => {

    const sw = new Stopwatch()
    if(sw.state !== "idle") throw Error()

})

runTest("Start changes state to running", () => {

    const sw = new Stopwatch()
    sw.start()
    if(sw.state !== "running") throw Error()

})

runTest("Pause changes state to paused", () => {

    const sw = new Stopwatch()
    sw.start()
    sw.pause()
    if(sw.state !== "paused") throw Error()

})

runTest("Continue returns state to running", () => {

    const sw = new Stopwatch()
    sw.start()
    sw.pause()
    sw.continue()
    if(sw.state !== "running") throw Error()

})

runTest("Clear resets state to idle", () => {

    const sw = new Stopwatch()
    sw.start()
    sw.clear()
    if(sw.state !== "idle") throw Error()

})

runTest("Clear resets elapsed time", () => {

    const sw = new Stopwatch()
    sw.start()
    sw.pause()
    sw.clear()

    if(sw.elapsedTime !== 0) throw Error()

})

runTest("pad() formats numbers", () => {

    const sw = new Stopwatch()

    if(sw.pad(5) !== "05") throw Error()

})

runTest("padMs() formats milliseconds", () => {

    const sw = new Stopwatch()

    if(sw.padMs(7) !== "007") throw Error()

})

/* =========================
   Markdown report
========================= */

function generateMarkdown(){

    let md = "# Test Results\n\n"

    md += "| Test | Time | Result |\n"
    md += "|-----|-----|-----|\n"

    results.forEach(r=>{

        const color = r.status === "PASS"
        ? '<span style="color:green">PASS</span>'
        : '<span style="color:red">FAIL</span>'

        md += `| ${r.name} | ${r.time} | ${color} |\n`

    })

    fs.writeFileSync("test-results.md", md)

}

generateMarkdown()

console.log("Tests ejecutados. Resultados guardados en test-results.md")