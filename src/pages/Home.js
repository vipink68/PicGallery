import image1 from "../images/image_1.jpg"
import image2 from "../images/image_2.jpg"
import image3 from "../images/image_3.jpg"

import Carousel from 'react-bootstrap/Carousel';

export default function Home() {

  return(
    <>
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="" text="First slide" fluid/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src={image2} alt="" text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src={image3} alt="" text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      {/* <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={image1} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={image2} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={image3} alt="Third slide" />
          </div>
        </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only"></span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only"></span>
              </a>
      </div> */}



    



<div class="row col-8 m-auto">
<div class="input-group mt-3 col-6">
<input type="search" class="form-control rounded-left" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
<button type="button" class="btn btn-success">search</button>
</div>
</div>


<div class="row col-8 mt-3 m-auto">
<div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
<img
  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
  class="w-100 shadow-1-strong rounded mb-4"
  alt="Boat on Calm Water"
/>

<img
  src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
  class="w-100 shadow-1-strong rounded mb-4"
  alt="Wintry Mountain Landscape"
/>
</div>

<div class="col-lg-4 mb-4 mb-lg-0">
<img
  src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
  class="w-100 shadow-1-strong rounded mb-4"
  alt="Mountains in the Clouds"
/>

<img
  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
  class="w-100 shadow-1-strong rounded mb-4"
  alt="Boat on Calm Water"
/>
</div>

<div class="col-lg-4 mb-4 mb-lg-0">
<img
  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
  class="w-100 shadow-1-strong rounded mb-4"
  alt="Waves at Sea"
/>

<img
  src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
  class="w-100 shadow-1-strong rounded mb-4"
  alt="Yosemite National Park"
/>
</div>
</div>

<div class="row col-8 mt-3 m-auto">
<div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
<img
  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
  class="w-100 shadow-1-strong rounded mb-4"
  alt="Boat on Calm Water"
/>

<img
  src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
  class="w-100 shadow-1-strong rounded mb-4"
  alt="Wintry Mountain Landscape"
/>
</div>

<div class="col-lg-4 mb-4 mb-lg-0">
<img
  src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
  class="w-100 shadow-1-strong rounded mb-4"
  alt="Mountains in the Clouds"
/>

<img
  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
  class="w-100 shadow-1-strong rounded mb-4"
  alt="Boat on Calm Water"
/>
</div>

<div class="col-lg-4 mb-4 mb-lg-0">
<img
  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
  class="w-100 shadow-1-strong rounded mb-4"
  alt="Waves at Sea"
/>

<img
  src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
  class="w-100 shadow-1-strong rounded mb-4"
  alt="Yosemite National Park"
/>
</div>
</div>

<div class="row col-8 mt-3 m-auto">
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
  <img
    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
    class="w-100 shadow-1-strong rounded mb-4"
    alt="Boat on Calm Water"
  />

  <img
    src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
    class="w-100 shadow-1-strong rounded mb-4"
    alt="Wintry Mountain Landscape"
  />
</div>

<div class="col-lg-4 mb-4 mb-lg-0">
  <img
    src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
    class="w-100 shadow-1-strong rounded mb-4"
    alt="Mountains in the Clouds"
  />

  <img
    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
    class="w-100 shadow-1-strong rounded mb-4"
    alt="Boat on Calm Water"
  />
</div>

<div class="col-lg-4 mb-4 mb-lg-0">
  <img
    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
    class="w-100 shadow-1-strong rounded mb-4"
    alt="Waves at Sea"
  />

  <img
    src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
    class="w-100 shadow-1-strong rounded mb-4"
    alt="Yosemite National Park"
  />
</div>
</div>
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
   </>
  )
}
