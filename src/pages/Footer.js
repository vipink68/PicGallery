import React from 'react'
export default function Footer() {
    return (
        <>
        <footer class="bg-dark mt-5 text-center text-white">
    <div class="container p-4 pb-0">
      <section class="mb-4">
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-facebook"></i></a>
  
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-twitter"></i
        ></a>
  
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-google"></i
        ></a>
  
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-instagram"></i
        ></a>
  
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-linkedin"></i
        ></a>
  
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-github"></i
        ></a>
      </section>
    </div>
  
    <div class="text-center p-3" style={myStyles}>
      © 2020 Copyright:
      <a class="text-white" href="/"> Picgallery</a>
    </div>
  </footer> 
        </>
    )
}
const myStyles = {
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
};
