import type { PointerData } from './types';

export class PointerTracker {
  #element: HTMLElement;
  #data: PointerData;
  #boundPointerMove: (e: PointerEvent) => void;
  #boundPointerLeave: () => void;
  #boundTouchMove: (e: TouchEvent) => void;
  #boundTouchEnd: () => void;

  constructor(element: HTMLElement, callbacks: Partial<PointerData> = {}) {
    this.#element = element;
    this.#data = {
      position: { x: 0, y: 0 },
      nPosition: { x: 0, y: 0 },
      hover: false,
      touching: false,
      onEnter: () => {},
      onMove: () => {},
      onClick: () => {},
      onLeave: () => {},
      ...callbacks,
    };

    this.#boundPointerMove = this.#onPointerMove.bind(this);
    this.#boundPointerLeave = this.#onPointerLeave.bind(this);
    this.#boundTouchMove = this.#onTouchMove.bind(this);
    this.#boundTouchEnd = this.#onTouchEnd.bind(this);

    this.#initEvents();
  }

  get data(): PointerData {
    return this.#data;
  }

  #initEvents() {
    this.#element.addEventListener('pointermove', this.#boundPointerMove);
    this.#element.addEventListener('pointerleave', this.#boundPointerLeave);
    this.#element.addEventListener('touchmove', this.#boundTouchMove, { passive: true });
    this.#element.addEventListener('touchend', this.#boundTouchEnd);
  }

  #updateCoords(clientX: number, clientY: number) {
    const rect = this.#element.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;

    this.#data.position.x = clientX - rect.left;
    this.#data.position.y = clientY - rect.top;
    this.#data.nPosition.x = (this.#data.position.x / rect.width) * 2 - 1;
    this.#data.nPosition.y = -(this.#data.position.y / rect.height) * 2 + 1;
  }

  #onPointerMove(e: PointerEvent) {
    this.#updateCoords(e.clientX, e.clientY);
    if (!this.#data.hover) {
      this.#data.hover = true;
      this.#data.onEnter(this.#data);
    }
    this.#data.onMove(this.#data);
  }

  #onPointerLeave() {
    if (this.#data.hover) {
      this.#data.hover = false;
      this.#data.onLeave(this.#data);
    }
  }

  #onTouchMove(e: TouchEvent) {
    if (e.touches.length > 0) {
      this.#updateCoords(e.touches[0].clientX, e.touches[0].clientY);
      this.#data.touching = true;
      if (!this.#data.hover) {
        this.#data.hover = true;
        this.#data.onEnter(this.#data);
      }
      this.#data.onMove(this.#data);
    }
  }

  #onTouchEnd() {
    this.#data.touching = false;
    this.#onPointerLeave();
  }

  dispose() {
    this.#element.removeEventListener('pointermove', this.#boundPointerMove);
    this.#element.removeEventListener('pointerleave', this.#boundPointerLeave);
    this.#element.removeEventListener('touchmove', this.#boundTouchMove);
    this.#element.removeEventListener('touchend', this.#boundTouchEnd);
  }
}
