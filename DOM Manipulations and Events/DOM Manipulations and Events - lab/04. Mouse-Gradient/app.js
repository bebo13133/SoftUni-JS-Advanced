function attachGradientEvents() {
    const gradientElement = document.getElementById('gradient-box');
    gradientElement.addEventListener('mousemove', (e)=> {
       const x = e.offsetX
       const percentOffset = Math.floor(x / 300 * 100)
    
    document.getElementById('result').textContent = percentOffset + "%"
    }
        )
}