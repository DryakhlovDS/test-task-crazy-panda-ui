const colors = {
  "background-color": {
    red: 255,
    green: 255,
    blue: 255,
  },
  color: {
    red: 0,
    green: 0,
    blue: 0,
  },
};

let targetName = "background-color";
let target = colors[targetName];

function toggleBtn(event) {
  $(".control-select__btn").removeClass("active");
  $(event.target).addClass("active");
}

function toggleTarget(event) {
  targetName = event.target.dataset.target;
  target = colors[targetName];
}

function setSliders({ red, green, blue }) {
  $("#sliderRed").slider("option", "value", red);
  $("#sliderGreen").slider("option", "value", green);
  $("#sliderBlue").slider("option", "value", blue);
}

$(".control-select__btn").click((e) => {
  toggleBtn(e);
  toggleTarget(e);
  setSliders(target);
});

$("#sliderRed").slider({
  classes: {
    "ui-slider-handle": "ui-corner-all ui-border-red",
    "ui-slider-range": "ui-corner-all ui-widget-header ui-red",
  },
  slide: function (event, ui) {
    target.red = ui.value;
    $("#board").css(
      `${targetName}`,
      `rgb(${target.red}, ${target.green}, ${target.blue})`
    );
  },
  range: "min",
  max: 255,
  value: 255,
});

$("#sliderGreen").slider({
  classes: {
    "ui-slider-handle": "ui-corner-all ui-border-green",
    "ui-slider-range": "ui-corner-all ui-widget-header ui-green",
  },
  slide: function (event, ui) {
    target.green = ui.value;
    $("#board").css(
      `${targetName}`,
      `rgb(${target.red}, ${target.green}, ${target.blue})`
    );
  },
  range: "min",
  max: 255,
  value: 255,
});

$("#sliderBlue").slider({
  classes: {
    "ui-slider-handle": "ui-corner-all ui-border-blue",
    "ui-slider-range": "ui-corner-all ui-widget-header ui-blue",
  },
  slide: function (event, ui) {
    target.blue = ui.value;
    $("#board").css(
      `${targetName}`,
      `rgb(${target.red}, ${target.green}, ${target.blue})`
    );
  },
  range: "min",
  max: 255,
  value: 255,
});
