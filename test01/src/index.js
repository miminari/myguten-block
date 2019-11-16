import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'my-blocks/test-block-01', {
    title: 'Basic Example',
    icon: 'smiley',
    category: 'layout',
    edit: () => <div>Hey, Lovely Freeks!</div>,
    save: () => <div>Hey, Lovely Freeks!</div>,
});
