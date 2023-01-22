import React from 'react';
import TrackerLayout from '../../../components/templates/trackerLayout/TrackerLayout';
import '../tracker2/tracker2.css';

function Tracker2() {
    return (
    <div className='tracker2Container'>
        <div className='layoutContainer'>
            <TrackerLayout />
        </div>
        <div className='mapContainer'>
            <iframe src='https://flo.uri.sh/visualisation/12497490/embed' 
                title='Interactive or visual content' 
                class='flourish-embed-iframe' 
                frameborder='0' 
                scrolling='no' 
                style={{width:'100%', height:'600px'}}
                sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'>  
            </iframe>
                <div style={{width: '100%' ,marginTop:'4px !important',textAlign:'right !important'}}>
                  <a class='flourish-credit' 
                      href='https://public.flourish.studio/visualisation/12497490/?utm_source=embed&utm_campaign=visualisation/12497490' 
                      target='_top' style={{textDecoration:'none !important'}}> 
                    <img alt='Made with Flourish' 
                        src='https://public.flourish.studio/resources/made_with_flourish.svg' 
                        style={{width:'105px !important',height:'16px !important',border:'none !important', margin: '0 !important'}} /> 
                  </a>
                </div>
        </div>
    </div>
  );
}

export default Tracker2