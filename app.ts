interface EditableResume {
    name: string;
    email: string;
    phone: string;
    education: string;
    skills: string;
    experience: string;
  }
  
  function getResumeData(): EditableResume {
    const name = (document.getElementById('name') as HTMLElement).innerText;
    const email = (document.getElementById('email') as HTMLElement).innerText;
    const phone = (document.getElementById('phone') as HTMLElement).innerText;
    const education = (document.getElementById('education') as HTMLElement).innerText;
    const skills = (document.getElementById('skills') as HTMLElement).innerText;
    const experience = (document.getElementById('experience') as HTMLElement).innerText;
  
    return { name, email, phone, education, skills, experience };
  }
  
  function saveResume() {
    const resumeData = getResumeData();
    localStorage.setItem('editableResume', JSON.stringify(resumeData));
    alert('Resume saved!');
  }
  
  function loadResume() {
    const savedResume = localStorage.getItem('editableResume');
    if (savedResume) {
      const resumeData: EditableResume = JSON.parse(savedResume);
  
      (document.getElementById('name') as HTMLElement).innerText = resumeData.name;
      (document.getElementById('email') as HTMLElement).innerText = resumeData.email;
      (document.getElementById('phone') as HTMLElement).innerText = resumeData.phone;
      (document.getElementById('education') as HTMLElement).innerText = resumeData.education;
      (document.getElementById('skills') as HTMLElement).innerText = resumeData.skills;
      (document.getElementById('experience') as HTMLElement).innerText = resumeData.experience;
    }
  }
  
  const saveButton = document.getElementById('saveButton');
  if (saveButton) {
    saveButton.addEventListener('click', saveResume);
  }
  
  window.onload = loadResume;
  