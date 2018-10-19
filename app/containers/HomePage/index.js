import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectLoading } from 'containers/App/selectors';
import { makeSelectImages, makeSelectImagesLoaded, makeImageSelected, makePreviousImageSelected } from './selectors';
import { loadImages, selectImage } from './actions';
import reducer from './reducer';
import saga from './saga';
import HomePage from './HomePage';

const mapDispatchToProps = (dispatch) => ({
  onLoadImages: () => dispatch(loadImages(true)),
  onSelectImage: (image) => dispatch(selectImage(image))
});

const mapStateToProps = createStructuredSelector({
  imageSelected: makeImageSelected(),
  previousImageSelected: makePreviousImageSelected(),
  images: makeSelectImages(),
  imagesLoaded: makeSelectImagesLoaded(),
  loading: makeSelectLoading()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withSaga, withConnect)(HomePage);
export { mapDispatchToProps };
