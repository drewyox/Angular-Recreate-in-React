import React from 'react';
import Blog from './Blog';
import Latest from './Latest';
import Pictures from './Pictures';
import Popular from './Popular';
import Review from './Review';
import Shop from './Shop';
import What from './What';
import '../scss/body.scss';


var masterBlogList = [
  {
    title: 'FEATURED SHOPS',
    subTitle: 'Handmade Wooden Utensils From Belaya Hvoya',
    content: 'Elevate your kitchen essentials with hand-carved spoons and stylish serveware you won’t want to hide away in a cabinet.'
  },
  {
    title: 'SHOPPING GUIDES',
    subTitle: '7 Bold Decor Trends to Make Your Own',
    content: 'Get ready to shake things up: This season’s signature decorating styles are chock full of vibrant colors and playful patterns.'
  },
  {
    title: 'INSPIRATION',
    subTitle: '5-Star Buys: A Handmade Map of a Favorite Place',
    content: 'Behold, your shortcut to an unforgettable gift.'
  }
];

var masterPopList = [
  {
    text:'1 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    text:'2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    text:'3 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    text:'4 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    text:'5 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    text:'6 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];

var masterShopList = [
  {
    category: 'DIY craft project'
  },
  {
    category: 'Jewelry gifts under $30'
  },
  {
    category: 'Vintage Clothing'
  },
  {
    category: 'Etsy Weddings'
  },
  {
    category: 'One of a Kind Gift Ideas'
  },
  {
    category: 'EDITOR\'s PICKS'
  }
];

var masterWhatList = [
  {
    title: 'A one-of-a-kind community',
    text: 'Etsy is a global online marketplace, where people come together to make, sell, buy, and collect unique items.'
  },
  {
    title: 'Support independent creators',
    text: 'There’s no Etsy warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.'
  },
  {
    title: 'Peace of mind',
    text: 'Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.'
  }
];


function Body(){
  return(
    <div>
      <div>
        <h2>Fresh From the Blog<span className='smallTitle'>Read the Blog</span></h2>
      </div>
      <div className='row'>
        {masterBlogList.map((blog, index) =>
          <Blog title={blog.title}
            subTitle={blog.subTitle}
            content={blog.content} 
            key={index}/>
        )}
      </div>
      <Latest/>
      <Pictures/>
      <div className='row'>
        {masterPopList.map((popular, index) =>
          <Popular text={popular.text}
            key={index}/>
        )}
      </div>
      <Review/>
      <div className='row'>
        {masterShopList.map((shop, index) =>
          <Shop category={shop.category}
            key={index}/>
        )}
      </div>
      
      <div className='background'>
        <div className='headWhat'>
          <h1> What Is Etsy?</h1>
          <a>Read our wonderful weird story</a>
        </div>
        <div className='row'>
          {masterWhatList.map((what, index) =>
            <What title={what.title}
              text={what.text}
              key={index}/>
          )}
          <div/>
          </div>
          <div className="bottomWhat">
            <p className='pTag'>Have a question? Well, we’ve got some answers.</p>
            <button type='submit'>Go to Help Center</button>
          </div>
        </div>
      </div>
  );
}

export default Body;
