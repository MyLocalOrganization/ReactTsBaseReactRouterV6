import * as ReactDOM from 'react-dom'

describe('it', () => {
    it('renders', () => {
        const div = document.createElement('div');

        ReactDOM.unmountComponentAtNode(div);
    });
});

