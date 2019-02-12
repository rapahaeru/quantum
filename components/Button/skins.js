import Colors from '../Colors';
import DefaultButton from './models/DefaultButton';

const skins = {
  primary: new DefaultButton({
    unselected: Colors.BLUE['500'],
    selected: Colors.COBALT['500'],
    disabled: Colors.BLACK['400'],
  }),
  secondary: new DefaultButton({
    unselected: Colors.WHITE,
    selected: Colors.BLUE['200'],
    disabled: Colors.SHADOW['40'],
    unselectedTextColor: Colors.BLUE['500'],
    disabledTextColor: Colors.BLACK['400'],
    unselectedBorder: Colors.BLUE['500'],
    selectedBorder: Colors.BLUE['500'],
  }),
  action: new DefaultButton({
    unselected: Colors.PINK['500'],
    selected: Colors.PINK['900'],
    disabled: Colors.PINK['500'],
  }),
};

export default ({ skin }) => skins[skin] || skins.primary;
