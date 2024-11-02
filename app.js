const downloadBtn = document.getElementById('downloadBtn');
const resumeContainer = document.querySelector('.resume-container');

downloadBtn.addEventListener('click', () => {
    const options = {
        margin: 1,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf()
        .from(resumeContainer)
        .set(options)
        .save();
});
