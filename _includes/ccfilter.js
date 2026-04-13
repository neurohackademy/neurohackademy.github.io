// All course-content entries.
const cc_all = Array.from(document.getElementsByClassName('cc-col'));


// The year selection stuff
const ccsel_year_checkboxes = Array.from(document.getElementsByName('cc-sel-year'));
const ccsel_year_allbox = ccsel_year_checkboxes.find(item => item.value == "all");
const ccsel_year_nonebox = ccsel_year_checkboxes.find(item => item.value == "none");
const ccsel_year_normboxes = Array.from(
    ccsel_year_checkboxes.filter(
        item => item.value != "all" && item.value != "none"));
const ccsel_year_dict = Object.fromEntries(
    Array.from(
        ccsel_year_normboxes.map(
            (cb) => {
                // all years should be selected initially except none.
                cb.checked = true;
                return [
                    cb.value,
                    [cb, document.getElementById("cc-year-div-" + cb.value)]];
            })));
ccsel_year_allbox.checked = true;
ccsel_year_nonebox.checked = false;

const ccsel_year_updateRows = () => {
    // First update all and none selections.
    allsel = true;
    nonesel = true;
    ccsel_year_normboxes.forEach(
        (cb) => {
            allsel = allsel && cb.checked;
            nonesel = nonesel && !cb.checked;
        });
    ccsel_year_allbox.checked = allsel;
    ccsel_year_nonebox.checked = nonesel;
    // now update the divs.
    for (const [key, [cb, yeardiv]] of Object.entries(ccsel_year_dict)) {
        if (cb.checked) {
            yeardiv.style.display = 'block';
        } else {
            yeardiv.style.display = 'none';
        }
    }
};


ccsel_year_normboxes.forEach(
    (cb) => {
        cb.addEventListener('change', ccsel_year_updateRows);
    });
ccsel_year_allbox.addEventListener(
    'change',
    () => {
        const ch = ccsel_year_allbox.checked;
        ccsel_year_normboxes.forEach((cb) => { cb.checked = ch; });
        ccsel_year_updateRows();
    });
ccsel_year_nonebox.addEventListener(
    'change',
    () => {
        const ch = !ccsel_year_nonebox.checked;
        ccsel_year_normboxes.forEach((cb) => { cb.checked = ch; });
        ccsel_year_updateRows();
    });


// The has video or not selection stuff.
const ccsel_hasvideo_either = document.getElementById('cc-sel-hasvideo-either');
const ccsel_hasvideo_yes = document.getElementById('cc-sel-hasvideo-yes');
const ccsel_hasvideo_no = document.getElementById('cc-sel-hasvideo-no');
const ccsel_hasvideo_optsdiv = document.getElementById('cc-sel-hasvideo-optsdiv');
let cur = "either";
const ccsel_hasvideo_updateRows = (event) => {
    if (event.target && event.target.matches('input[type="radio"]')) {
        // First update all and none selections.
        show_either = ccsel_hasvideo_either.checked;
        show_yes = show_either | ccsel_hasvideo_yes.checked;
        show_no = show_either | ccsel_hasvideo_no.checked;
        // make sure we need to run.
        const state = (show_either? "either" : show_yes? "yes" : "no");
        if (state == cur) {
            return;
        } else {
            cur = state;
        }
        console.log(" --- " + state);
        // now update the cc_all divs.
        const hasvid_to = show_yes ? 'block' : 'none';
        const novid_to = show_no ? 'block' : 'none';
        cc_all.forEach(
            (el) => {
                // the video is the second child.
                const viddiv = el.children[1];
                if (viddiv.querySelector('iframe') !== null) {
                    el.style.display = hasvid_to;
                } else {
                    el.style.display = novid_to;
                }
            });
    }
};
ccsel_hasvideo_yes.addEventListener('change', ccsel_hasvideo_updateRows);
ccsel_hasvideo_no.addEventListener('change', ccsel_hasvideo_updateRows);
ccsel_hasvideo_either.addEventListener('change', ccsel_hasvideo_updateRows);
