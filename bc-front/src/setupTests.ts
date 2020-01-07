import * as enzyme from 'enzyme';
import ReactSixteenAdapter, * as Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new ReactSixteenAdapter() });