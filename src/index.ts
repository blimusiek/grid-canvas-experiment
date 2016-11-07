
const h = (tag: string, options: Object, children: HTMLElement[], text?: string): HTMLElement => {
    const el: HTMLElement = document.createElement(tag);
    Object.keys(options).forEach(attr => el.setAttribute(attr, options[attr]));
    if (text) {
        el.appendChild(document.createTextNode(text));
    }
    children.forEach(child => el.appendChild(child));
    return el;
}

interface Group {
    value: string;
    colid: string;
    children?: Group[];
}
type Row = Group[];

const group = (value, id, children?) => Object.assign({}, {value: value, colid: id, children: children}); 

const header: Row = [
    group('M', '', [
        group('C1', 'col-0'),
        group('S2', '', [
            group('C2', 'col-1'),
            group('C3', 'col-2')
        ])
    ])
];

const cell = (g: Group): HTMLElement => {
    return h('div', {class: `cell ${g.colid}`}, [], g.value);
}

const col = (g: Group): HTMLElement => {
    const children = [cell(g)].concat(g.children ? [row(g.children)]: []);
    return h('div', {class: 'col'}, children);
}

const row = (r: Row): HTMLElement => {
    const cols = r.map((g: Group) => col(g));
    return h('div', {class: 'row'}, cols);
}

document.body.appendChild(row(header));