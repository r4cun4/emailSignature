let socials = {
    linkedin: {
      url: 'https://linkedin.com/in/acunarodrigo/linkedin',
      icon: 'https://image.flaticon.com/icons/png/512/1384/1384030.png'
    },
    github: {
      url: 'https://github.com/r4cun4',
      icon: 'https://image.flaticon.com/icons/png/512/25/25657.png'
    },
    resume: {
      url: 'https://drive.google.com/file/d/1RmCuezmbv6W_h8waMS8OVK4EN2YGkQ7e/view?usp=sharing',
      icon: 'https://image.flaticon.com/icons/png/512/909/909263.png'
    }
  }
  
  let socialIcons = '';
  for(let social in socials) {
    socialIcons += `<a href="${socials[social].url}" style="display:inline-block;margin-right:6px"><img src="${socials[social].icon}" width="25" style="display: block"></a>`
  }
  
  document.getElementById('sociales').innerHTML = socialIcons;