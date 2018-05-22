import Wrapper from './Wrapper';
import MediaQ from './MediaQ';

const CenteredWrapper = Wrapper.extend`
	margin: 0 auto;
	width: 70%;
	${MediaQ.desktop`width: 70%;`}
	${MediaQ.tablet`width: 85%;`}
	${MediaQ.phone`width: 100%;`}
`;

export default CenteredWrapper;