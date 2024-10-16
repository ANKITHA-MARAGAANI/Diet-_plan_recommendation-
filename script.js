document.getElementById('recommendBtn').addEventListener('click', function() {
    const preference = document.getElementById('preference').value;
    const recommendationDiv = document.getElementById('recommendation');
    let meals;

    switch (preference) {
        case 'vegan':
            meals = [
                "Breakfast: Smoothie with spinach, banana, and almond milk",
                "Lunch: Quinoa salad with chickpeas, cucumber, and lemon dressing",
                "Dinner: Stir-fried tofu with mixed vegetables and brown rice"
            ];
            break;
        case 'vegetarian':
            meals = [
                "Breakfast: Greek yogurt with honey and mixed berries",
                "Lunch: Caprese salad with fresh mozzarella, tomatoes, and basil",
                "Dinner: Pasta primavera with seasonal vegetables"
            ];
            break;
        case 'keto':
            meals = [
                "Breakfast: Scrambled eggs with avocado",
                "Lunch: Spinach salad with grilled chicken and olive oil",
                "Dinner: Zucchini noodles with pesto and shrimp"
            ];
            break;
        case 'paleo':
            meals = [
                "Breakfast: Omelet with vegetables and bacon",
                "Lunch: Chicken salad with avocado and walnuts",
                "Dinner: Grilled salmon with asparagus"
            ];
            break;
        default:
            meals = ["Please select a dietary preference."];
    }

    recommendationDiv.innerHTML = meals.join('<br>');
});
