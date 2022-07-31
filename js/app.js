const post_modal_form = document.getElementById('post_modal_form');
const postEdit = document.getElementById('postEdit');
const msg = document.querySelector('.msg');
const postContent = document.querySelector('.post-content');

const showAllPost = () => {

    let data = readLSData('post');
    let list = '';

    if( !data || data.length == 0){
        list += `
            <div class="card">
                <h5 class="text-center">Data Not Found</h5>
            </div>
        `;
    }

    if(data && data.length > 0){
        data.reverse().map((item) => {
            list += `
                <div class="card p-3 mb-4">
                    <div class="d-flex justify-content-between">
                        <div class="post-details-left">
                            <div class="d-flex">
                                <div class="profile-img">
                                    <a href="#">
                                        <img src="${item.authPhoto}"
                                            alt="" class="rounded-circle shadow">
                                    </a>
                                </div>
                                <div class="profile-des ms-3">
                                    <div class="nav">
                                        <h6 class="nav-item">
                                            <a href="#" class="profile-des-title">${item.authName}</a>
                                        </h6>
                                    </div>
                                    <p class="small">${item.authDesignation}</p>
                                    <span> 2hr </span>
                                </div>
                            </div>
                        </div>
                        <div class="dropdown post-details-right">
                            <a href="#" class="threeDots" id="threeDots-dropdown" data-bs-toggle="dropdown"
                                aria-expanded="true">
                                <i class="bi bi-three-dots"></i>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="threeDots-dropdown">
                                <li><a class="dropdown-item edit_btn" href="#edit-post-modal"
                                        data-bs-toggle="modal" postID = ${item.id} href="#">Edit</a></li>
                                <li><a class="dropdown-item delete_btn" postID = ${item.id} href="#">Delete</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="post-content">
                        <p class="mt-4 mb-3">${item.postDescription}</p>
                        <img src="${item.postPhoto}"
                            alt="" class="img-fluid rounded">
                    </div>
                    <hr>
                    <ul class="nav post-icon post-icon2 justify-content-between">
                        <li>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    data-supported-dps="24x24" fill="currentColor" class="mercado-match"
                                    width="24" height="24" focusable="false">
                                    <path
                                        d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z">
                                    </path>
                                </svg>
                                <span class="small">Like</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    data-supported-dps="24x24" fill="currentColor" class="mercado-match"
                                    width="24" height="24" focusable="false">
                                    <path
                                        d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z">
                                    </path>
                                </svg>
                                <span class="small">Comment</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    data-supported-dps="24x24" fill="#c37d16" class="mercado-match" width="24"
                                    height="24" focusable="false">
                                    <path
                                        d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z">
                                    </path>
                                </svg>
                                <span class="small">Event</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    data-supported-dps="24x24" fill="#e16745" class="mercado-match" width="24"
                                    height="24" focusable="false">
                                    <path
                                        d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z">
                                    </path>
                                </svg>
                                <span class="small">Write Article</span>
                            </a>
                        </li>
                    </ul>
                </div>
            `;
        })
    }

    postContent.innerHTML = list;

}

showAllPost();
post_modal_form.onsubmit = (e) => {
    e.preventDefault();

    let form_data = new FormData(e.target);
    let { authName, authPhoto, authDesignation, postDescription, postPhoto} = Object.fromEntries(form_data.entries());
    let postInfo = Object.fromEntries(form_data.entries());
    let randomID = Math.floor(Math.random() * 1000) + '_' + Date.now();;

    if( !authName || !authPhoto || !authDesignation || !postDescription || !postPhoto ){
        msg.innerHTML = setAlert('All fields are required!');
    }else{

        createLSData('post', {...postInfo, id : randomID});


        msg.innerHTML = setAlert("Data Stable", 'success');
        e.target.reset();
        showAllPost();
    }
}

postContent.onclick = (e) => {
    e.preventDefault();

    if(e.target.classList.contains('edit_btn')){
        let post_id = e.target.getAttribute('postID');

        let data = readLSData('post');

        let { authName, authPhoto, authDesignation, postPhoto, postDescription } = data.find(dataItem => dataItem.id == post_id);

        postEdit.innerHTML = `
            <div class="my-3">
                <label for="">Auth Name</label>
                <input type="text" class="form-control" name="authName" value="${authName}">
            </div>
            <div class="my-3">
                <img src="${authPhoto}" class="w-100"/>
            </div>
            <div class="my-3">
                <label for="">Auth Photo</label>
                <input type="text" class="form-control" name="authPhoto" value="${authPhoto}">
            </div>
            <div class="my-3">
                <label for="">Auth Designation</label>
                <input type="text" class="form-control" name="authDesignation" value="${authDesignation}">
            </div>
            <div class="my-3">
                <img src="${postPhoto}" class="w-100"/>
            </div>
            <div class="my-3">
                <label for="">post Photo</label>
                <input type="text" class="form-control" name="postPhoto" value="${postPhoto}">
            </div>
            <div class="my-3">
                <input type="hidden" class="form-control" name="postID" value="${post_id}">
            </div>
            <div class="my-3">
                <label for="">post Description</label>
                <textarea id="" rows="3" class="form-control" name="postDescription">${postDescription}</textarea>
            </div>
            <div class="my-3">
                <input type="submit" class="btn btn-primary w-100" value="Edit Post">
            </div>
        `;


        
    }
    if(e.target.classList.contains('delete_btn')){
        let post_id = e.target.getAttribute('postID');

        let conf = confirm('You want to delete?');
        if(conf){
            let data = readLSData('post');

        let deleteData = data.filter(dataItem => dataItem.id !== post_id); 
        updateLSData('post', deleteData);
        showAllPost();
        }
    }
}

postEdit.onsubmit = (e) => {
    e.preventDefault();

    let form_data = new FormData(e.target);
    let {authName,authPhoto, authDesignation,postPhoto, postDescription, postID} = Object.fromEntries(form_data.entries());

    let all_data = readLSData('post');

    all_data.map((item => {
        if(item.id == postID){
            item.authName = authName, 
            item.authPhoto = authPhoto, 
            item.authDesignation = authDesignation, 
            item.postPhoto = postPhoto, 
            item.postDescription = postDescription
        }
    }))

    updateLSData('post', all_data);
    showAllPost();
}