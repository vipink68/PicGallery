
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "../images/Camera_pic.jpg"
export default function About() {

    return(
      <>
      <div id="div1" class="container">
    <div id="div2" class="row">
        <div class="col">
            <main>
              <Container>
                <Row>
                  <img src={Image} alt="" style={mystyle} />
                </Row>
                <Row>
                  <Col>                    
                   <h2>What Sets Us Apart</h2>
                    <ul>
                        <li>Diverse and Curated Collections: We curate a diverse range of images that span various genres, from landscapes and portraits to abstract and experimental art. Our team of experts meticulously selects and categorizes images to ensure a rich and dynamic collection.</li>
                        <li>Empowering Creativity: Your Image Gallery is more than just a platform for viewing images. It's a place where photographers and artists can share their work with the world. We provide the tools and support to help creators reach a global audience and gain recognition for their talent.</li>
                        <li>Community Engagement: We believe in the power of community. Our forums and social features allow users to connect, share ideas, and inspire each other. Whether you're a seasoned professional or an amateur photographer, you'll find a welcoming and supportive community here.</li>
                        <li>User-Friendly Interface: We've designed our website with you in mind. Our user-friendly interface makes it easy to browse, search, and discover images that resonate with you. We also offer a seamless mobile experience so you can enjoy our gallery on the go.</li>
                        <li>Quality Assurance: We're committed to maintaining high-quality standards. Our team reviews and approves each image before it's featured on our platform, ensuring that you always encounter exceptional content.</li>
                    </ul>
                </Col>
                <Col>
                <h2>Our Story</h2>
                    <p>Your Image Gallery was founded by a group of photography and art enthusiasts who recognized the need for a dedicated space to celebrate the beauty of images. Our journey began with a simple idea: to create an online gallery that not only showcases incredible visual content but also fosters a community of like-minded individuals who appreciate the art of photography and digital imagery.</p>
                    
                </Col>
                </Row>
              </Container>
                <section>
                    <h2>What Sets Us Apart</h2>
                    <ul>
                        <li>Diverse and Curated Collections: We curate a diverse range of images that span various genres, from landscapes and portraits to abstract and experimental art. Our team of experts meticulously selects and categorizes images to ensure a rich and dynamic collection.</li>
                        <li>Empowering Creativity: Your Image Gallery is more than just a platform for viewing images. It's a place where photographers and artists can share their work with the world. We provide the tools and support to help creators reach a global audience and gain recognition for their talent.</li>
                        <li>Community Engagement: We believe in the power of community. Our forums and social features allow users to connect, share ideas, and inspire each other. Whether you're a seasoned professional or an amateur photographer, you'll find a welcoming and supportive community here.</li>
                        <li>User-Friendly Interface: We've designed our website with you in mind. Our user-friendly interface makes it easy to browse, search, and discover images that resonate with you. We also offer a seamless mobile experience so you can enjoy our gallery on the go.</li>
                        <li>Quality Assurance: We're committed to maintaining high-quality standards. Our team reviews and approves each image before it's featured on our platform, ensuring that you always encounter exceptional content.</li>
                    </ul>
                </section>
                <section>
                    <h2>Our Vision</h2>
                     <p>Our vision is to become the go-to destination for anyone seeking visual inspiration, whether it's for personal enjoyment, professional development, or creative expression. We aspire to continue expanding our collections, fostering a vibrant community, and providing innovative tools and features that enhance your experience.</p>
                </section>
                <section>
                    <h2>Join Us on this Journey</h2>
                    <p>We invite you to explore Your Image Gallery and become a part of our growing community. Whether you're here to admire the work of talented artists or to share your own creations, we're excited to have you with us. Together, we can celebrate the art of visual storytelling and create a world where images truly speak a universal language.</p>
                    <p>Thank you for choosing Your Image Gallery as your source of visual inspiration. We look forward to sharing this creative journey with you.</p>
                </section>
            </main>
        </div>
    </div>
</div>
      </>
    )
  }
  
  const mystyle = {
    width: '100vw',
    padding: '4vh'
  }