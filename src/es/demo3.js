var yideng;

function yideng() {
    console.log(1);
}

(function () {
    yideng();

    function yideng() {
        console.log(2);
    }
})();
