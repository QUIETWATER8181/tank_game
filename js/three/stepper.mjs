// Bounded fixed simulation step. Rendering and future gameplay do not share a clock.
export class FixedStepper {
  constructor(step = 1 / 60, maxSteps = 5) {
    this.step = step;
    this.maxSteps = maxSteps;
    this.accumulator = 0;
  }
  reset() { this.accumulator = 0; }
  advance(delta, update) {
    this.accumulator += Math.min(Math.max(delta, 0), this.step * this.maxSteps);
    let count = 0;
    while (this.accumulator + 1e-10 >= this.step && count < this.maxSteps) {
      update(this.step);
      this.accumulator = Math.max(0, this.accumulator - this.step);
      count++;
    }
    return this.accumulator / this.step;
  }
}
