const smartgrid = require('smart-grid');

/* It's principal settings in smart grid project */
const settings = {
    outputStyle: 'styl', /* less || scss || sass || styl*/
    columns: 12, /* number of grid columns */
    offset: '10px', /* gutter width px || % || rem *  -> default = 30px /
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1145px', /* max-width оn very large screen */
        fields: '10px' /* side fields - default = 30px */
    },
    breakPoints: {
        lg: {
            width: '1100px', /* -> @media (max-width: 1100px) */
        },
        md: {
            width: '960px'
        },
        sm: {
            width: '780px',
            fields: '15px' /* set fields only if you want to change container.fields */
        },
        xs: {
            width: '560px'
        }
        /*
         We can create any quantity of break points.

         some_name: {
         width: 'Npx',
         fields: 'N(px|%|rem)',
         offset: 'N(px|%|rem)'
         }
         */
    }
};

smartgrid('app/grid-stylus', settings);