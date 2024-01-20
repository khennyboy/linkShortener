window.addEventListener('DOMContentLoaded', function(){

let parent = document.querySelector('.wrapper')

for(var i=0;  i < datas.length; i++){

    let m = datas[i], x;
 x = `<div class="each_role" id='each_role${m.id}'>
<div class="left">
<div class="company-logo">
  <img src='${m.logo}' alt='${m.company}_logo' >
</div>
<div class="info_1">
   <span class="company">${m.company}</span>

</div>
<div class="info_2" >
  <h3 class="position">${m.position}</h3>
</div>
<div class="info_3">
  <span class="postedAt">${m.postedAt}</span>
  <span class="contract">${m.contract}</span>
  <span class="location">${m.location}</span>
</div>
</div>
<div class="right">
<span class="language" data-language="${m.role}">${m.role}</span>
<span class="language" data-language="${m.level}">${m.level}</span>
</div>
</div>`

parent.insertAdjacentHTML('beforeend', x)

let right = document.querySelector(`#each_role${m.id} .right`)
let info_1 = document.querySelector(`#each_role${m.id} .left .info_1`)

m.languages.forEach(each=>{
  let tag = `<span class="language" data-language="${each}">${each}</span>`
  right.insertAdjacentHTML('beforeend', tag)
})

m.tools.forEach(each=>{
    let tag = `<span class="language" data-language="${each}">${each}</span>`
    right.insertAdjacentHTML('beforeend', tag)
  })

  m.new && info_1.insertAdjacentHTML('beforeend', `<span class="new">NEW!</span>` )
  m.featured && info_1.insertAdjacentHTML('beforeend', `<span class="featured">FEATURED</span>` )

}
});

