import harvardArt from './data/harvardArt'
import GalleryNavigation from './components/GalleryNavigation'
import GalleryView from './components/GalleryView';
import ImgRender from './components/ArtImageTile';
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className='page-wrapper'>
      <GalleryNavigation galleries={harvardArt.records} />

      <Switch>
        <Route path='/galleries/:galleryId'>
          <GalleryView galleries={harvardArt.records} />
          <ImgRender galleries={harvardArt.records}/>
        </Route>
        <Route exact path='/'>
          <h2>Harvard Art Museum</h2>
            <p>Look, but Don't Touch. Please select a Gallery in the navigation bar.</p>
        </Route>
        <Route>
          <h2>Page Not Found</h2>
        </Route>
      </Switch>
    </div>

  );
}

export default App;
