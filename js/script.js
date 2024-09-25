function updatePreview() {
    // Mengambil nilai input
    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;
    const message = document.getElementById('message').value;

    // Mengambil nilai radio button
    const genderElems = document.getElementsByName('gender');
    let gender = '';
    for (let i = 0; i < genderElems.length; i++) {
        if (genderElems[i].checked) {
            gender = genderElems[i].value;
        }
    }

    // Mendapatkan waktu saat ini
    const currentTime = new Date().toLocaleString(); // Format waktu sesuai lokal

    // Mengupdate output preview
    document.getElementById('output-time').textContent = currentTime; 
    document.getElementById('output-name').textContent = name;
    document.getElementById('output-birthdate').textContent = birthdate;
    document.getElementById('output-gender').textContent = gender;
    document.getElementById('output-message').textContent = message;
}