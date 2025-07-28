# Animated Car Speedometer

A simple, interactive JavaScript speedometer component that visualizes rate measurements with smooth needle animations and sound effects.

## Features

- **Smooth Animations**: CSS-based needle transitions with easing effects
- **Interactive Controls**: Input fields for customizing rate parameters
- **Statistical Visualization**: Displays expected rate, minimum, and maximum values
- **Audio Enhancement**: Car starting sound effect on initialization
- **Responsive Design**: Clean, centered layout that adapts to different screen sizes

## Demo

The speedometer performs an initial startup animation where the needle sweeps from 0° to 180° and back, simulating a car starting sequence. Users can then input statistical parameters to visualize rate estimates.

## Project Structure

```
speedometer/
├── index.html          # Main HTML structure
├── index.css           # Styling and animations
├── index.js            # Core JavaScript functionality
├── speedometer.png     # Speedometer background image
├── needle.png          # Needle graphic
└── car-starting.mp3    # Startup sound effect
```

## How It Works

### Core Components

1. **Speedometer Display**: A circular gauge showing measurement ranges
2. **Animated Needle**: Rotates to indicate current values with smooth transitions
3. **Input Controls**: Three parameters for statistical calculations:
   - Given Rate
   - Expected Rate
   - Standard Deviation

### Calculation Logic

The component calculates display ranges using statistical parameters:
- **Minimum Value**: Expected Rate - Standard Deviation
- **Maximum Value**: Expected Rate + Standard Deviation
- **Needle Position**: Maps the given rate to degrees (0-180°) within the min-max range

If the given rate falls outside the calculated range, it's automatically clamped to stay within bounds.

## Usage

1. Open `index.html` in a web browser
2. Wait for the startup animation to complete
3. Enter your parameters:
   - **Given Rate**: The actual measured value
   - **Expected Rate**: The anticipated/target value
   - **Standard Deviation**: The measurement variance
4. Click "Get Estimate" to update the speedometer

## Technical Details

### Animation System
- Uses CSS transitions with `ease-in-out` timing
- 800ms animation duration for smooth movement
- Cross-browser compatibility with vendor prefixes

### JavaScript Functions
- `initializeValues()`: Updates display labels
- `valueToDegrees()`: Converts numeric values to rotation angles
- `startSpeedometer()`: Performs startup animation sequence
- `moveNeedle()`: Positions needle at specific angles
- `getEstimate()`: Main calculation and update function

### Styling Features
- Flexbox layout for perfect centering
- Z-index layering for proper element stacking
- Responsive design principles
- Clean, minimal aesthetic

## Browser Requirements

- Modern web browser with CSS3 transition support
- JavaScript enabled
- HTML5 audio support (for sound effects)

## Customization

The speedometer can be easily customized by:
- Replacing `speedometer.png` and `needle.png` with custom graphics
- Modifying CSS properties for different sizes or colors
- Adjusting animation duration in the JavaScript constants
- Changing the degree range (currently 0-180°) for different gauge types

## Files Required

Ensure these assets are present in your project directory:
- `speedometer.png` - Background gauge image
- `needle.png` - Needle graphic
- `car-starting.mp3` - Startup sound (optional)

## License

This project is open source and available for modification and redistribution.
