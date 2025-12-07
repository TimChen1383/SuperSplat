import { Button, Container, NumericInput } from '@playcanvas/pcui';

import { Events } from '../events';

type PointerOp = 'set' | 'add' | 'remove';

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

class SizeSelection {
    activate: () => void;
    deactivate: () => void;

    constructor(events: Events, parent: HTMLElement, canvasContainer: Container) {
        let threshold = 0.01;

        const selectToolbar = new Container({
            class: 'select-toolbar',
            hidden: true
        });

        selectToolbar.dom.addEventListener('pointerdown', (event) => {
            event.stopPropagation();
        });

        const thresholdInput = new NumericInput({
            value: threshold,
            placeholder: 'Size threshold',
            width: 120,
            precision: 4,
            min: 0,
            max: 10
        });

        const selectButton = new Button({
            text: 'Select',
            width: 60
        });

        const addButton = new Button({
            text: 'Add',
            width: 60
        });

        const removeButton = new Button({
            text: 'Remove',
            width: 100
        });

        selectToolbar.append(thresholdInput);
        selectToolbar.append(selectButton);
        selectToolbar.append(addButton);
        selectToolbar.append(removeButton);
        canvasContainer.append(selectToolbar);

        thresholdInput.on('change', () => {
            threshold = clamp(thresholdInput.value ?? threshold, 0, 10);
        });

        selectButton.on('click', () => {
            events.fire('select.sizeThreshold', 'set', threshold);
        });

        addButton.on('click', () => {
            events.fire('select.sizeThreshold', 'add', threshold);
        });

        removeButton.on('click', () => {
            events.fire('select.sizeThreshold', 'remove', threshold);
        });

        this.activate = () => {
            selectToolbar.hidden = false;
        };

        this.deactivate = () => {
            selectToolbar.hidden = true;
        };
    }
}

export { SizeSelection };