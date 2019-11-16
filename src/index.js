import { registerBlockType } from '@wordpress/bloccks';

registerBlockType( 'myguten/test-block', {
    title: 'Basic Example',
    icon: 'smiley',
    category: 'layout',
    edit: () => <div>Hey, Lovely Freeks!</div>,
    save: () => <div>Hey, Lovely Freeks!</div>,
});
