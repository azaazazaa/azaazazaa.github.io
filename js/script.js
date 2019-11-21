const tmp = document.querySelector('.slide-win');
        tmp.addEventListener('click', function() {
            console.log('click!!!');
            const sidebar = document.querySelector('.left-categories');
            if(sidebar.classList.contains('show')) {
                sidebar.classList.remove('show');
            } else {
                sidebar.classList.add('show');
            }
            console.log(sidebar);
        })
        console.log('test', tmp);