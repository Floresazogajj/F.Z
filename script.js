

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `

    <footer class="selection-p1">
        <div class="col">
            <h4>Contact</h4>
            <p><strong>Address:</strong> 56 Glassford Street Glasgow G1 1UL New York</p>
            <p><strong>Phone:</strong> +442035142048</p>
        
            <div class="follow">
                <h4>Follow us</h4>
                <div class="icon">
                    <i class='bx bxl-facebook'></i>
                    <i class='bx bxl-twitter'></i>
                    <i class='bx bxl-instagram' ></i>
                    <i class='bx bxl-pinterest-alt' ></i>
                    <i class='bx bxl-youtube' ></i>
    
                </div>
            </div>
        </div>
    
        <div class="col">
            <h4>About</h4>
            <a href="#">About Us</a>
            <a href="#">Delivery Information</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Contact Us</a>
        </div>
    
        <div class="col">
            <h4>My Account</h4>
            <a href="#">Sign In</a>
            <a href="#">View Cart</a>
            <a href="#">My Wishlist</a>
            <a href="#">Track My Order</a>
            <a href="#">Help</a>
        </div>
         <div class="col install">
              <h4>Install App</h4>
              <p>Form App Store or Google Play</p>
              <p>Secured Payment Gateways</p>
         </div>
    
         <div class="copyright">
            <p>© 2023, Tech etc - HTML CSS JavaScript WebSite Template</p>
         </div>
       </footer>
    </div>
    var btn = document.getElementById("btn");
    var light = document.getElementById("light");

    function toggleBtn(){
        btn.classList.toggle("active");
        light.classList.toggle("on");
    
}
createFooter();
