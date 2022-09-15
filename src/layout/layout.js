import React, { Component } from 'react';
import './layout.css';
import cosiness from '../assets/cosiness.png';
import intensity from '../assets/intensity.png';
import ingles from '../assets/ingles.png'


export default class Layout extends Component{
  render(){
    return(
      <main>
      <section className='boxExt'>

        <div className='boxinter'>
          <div className='menu'>
            <button className='search'><img src={ingles} alt='ingles'/></button>
            <input className='inputSearch' type="text"/>
          </div>
          
          <div className='boxProduct'>
            <div className='image1'>
            </div>

            <div className='box-text'>
              <div className='text'>

                <div className='price'>
                  <h1>COSINESS</h1>
                  <h2>$15</h2>
                </div>
                  <h3>WHAT'S INSIDE</h3>
                  <p>Chili, oregano, safran, paprika</p>
                  <h3>WHAY WE LOVE IT</h3>
                  <p>This one will add a litle savoury 
                     flavour to any food and turn any 
                      meal to a culinary masterpiece.</p>
              </div>

              <div className='descrytion'>
                <form>
                  <input name="bag" id='bag' type={'radio'}/>
                  <label for="bag">BAG (75g)</label>
                  <input name="bag" id='jar' type={'radio'}/>
                  <label for="jar">JAR (150g)</label>
                </form>
              </div>              
            </div>

            <div className='calc'>
              <div className='qtd'>
                <button className='decreate'>-</button>
                <p className='num'>1</p>
                <button className='add'>+</button>
              </div>
              <button className='cart'>ADD TO CART</button>
            </div>

          </div>
          
        </div>

      </section>
      </main>
      
    )
  }
}