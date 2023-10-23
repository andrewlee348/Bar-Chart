# Bar Chart using React and Typescript

Deployed here: https://bar-chart-react-typescript.web.app/

## Instructions

There are 7 props, all optional except the data array. The default settings are already stored in the text fields using states.

All of the props have been tested but feel free to play around with them.

## Functionality

The default values are stored within the BarChart and other components and not the states in the main app page.

I tried to make the chart component as scalable as possible and I think I have achieved something very close. The bars and bar widths scale perfectly to almost any height and width. However, if the height is set low enough, the bars disappear. This is because I had to give allocate some top and bottom component space for the hover value tooltip as well as the data labels.

Lower bound of height:  
Without labels: 25  
With labels: 50

With heights below or at the lower bounds, the bars disappear and text starts to get cut off.
With heights above the lower bounds, all functionality is normal.
