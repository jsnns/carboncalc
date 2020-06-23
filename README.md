# Planning

I want to calculate the carbon foot print of fule for biking and driving a given distance.

## Bike CO2 Calculation

CO2 Emitted = calories \* (g CO2/g)

Calorie(Kcal) ＝ (BMR x (6.8/h) / 24 x hour)\*(distance(miles)/speed(mph))

Men: BMR = 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) - (5.677 x age in years)
Women: BMR = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) - (4.330 x age in years)

## Food Options

1. Red Meat
2. Beef
3. Dairy
4. Milk

## Calculation Payload

```
{
    distance: int,
    speed: int
    weight: int,
    height: int,
    foodSource: enum,
    sex: m|f
}
```

## Calculation Response

```
{
    car: int, // total grams of CO2
    bike: int
}
```
