import { Circles } from 'react-loader-spinner';
import {SpinnerSect} from './Loader.styled';

const Loader = () => (
    <SpinnerSect>
        <Circles color="#00d9ff" size={50} thickness={100} speed={100}/>
    </SpinnerSect>
);

export default Loader;