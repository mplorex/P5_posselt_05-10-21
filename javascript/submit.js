formElement.onmousemove = function(e) {
    let ctx = formElement.getContext('2d');
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
};

async function submit() {
    let formData = new FormData();
    formData.append('firstName', 'John');
    
    let response = await fetch('', {
        method: 'POST',
        body: formData
    });
    let result = await response.json();
    alert(result.message);
}