import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  // Mock data for meals
  meals = [
    {
      type: 'Breakfast',
      items: [
        {
          src: 'assets/img/B1.jpg',
          name: 'Berry Bliss Smoothie Bowl',
          description: 'Perfect for a refreshing and energy-boosting breakfast.',
          recipe : "1)Add frozen berries, frozen banana, almond milk, and chia seeds to a blender. Blend until smooth and thick. Add more almond milk if needed for blending.\n 2)Pour the smoothie base into a bowl.\n 3)Arrange the toppings (kiwi, banana, raspberries, blueberries, granola, and nuts) artistically on top of the smoothie.\n 4)Serve immediately and enjoy!",
          nutrition: 'Calories: 320, Protein: 6g, Carbs: 48g, Fat: 12g'
        },
        {
          src: 'assets/img/b5.jpg',
          name: 'Breakfast 2',
          description: 'Tasty and nutritious',
          recipe: "",
          nutrition: 'Calories: 250, Protein: 12g, Carbs: 35g'
        },
        {
          src: 'assets/img/b3.jpg',
          name: 'Breakfast 3',
          description: 'Tasty and nutritious',
          recipe: "",
          nutrition: 'Calories: 250, Protein: 12g, Carbs: 35g'
        },
        {
          src: 'assets/img/b4.jpg',
          name: 'Breakfast 4',
          description: 'Tasty and nutritious',
          recipe: "",
          nutrition: 'Calories: 250, Protein: 12g, Carbs: 35g'
        },
        {
          src: 'assets/img/b7.webp',
          name: 'Breakfast 5',
          description: 'Tasty and nutritious',
          recipe: "",
          nutrition: 'Calories: 250, Protein: 12g, Carbs: 35g'
        },
        {
          src: 'assets/img/B11.webp',
          name: 'Breakfast 6',
          description: 'Tasty and nutritious',
          recipe: "",
          nutrition: 'Calories: 250, Protein: 12g, Carbs: 35g'
        },
        {
          src: 'assets/img/B10.jpg',
          name: 'Breakfast 7',
          description: 'Tasty and nutritious',
          recipe: "",
          nutrition: 'Calories: 250, Protein: 12g, Carbs: 35g'
        },
        {
          src: 'assets/img/B1.jpg',
          name: 'Berry Bliss Smoothie Bowl',
          description: 'Perfect for a refreshing and energy-boosting breakfast.',
          recipe : "1)Add frozen berries, frozen banana, almond milk, and chia seeds to a blender. Blend until smooth and thick. Add more almond milk if needed for blending.\n 2)Pour the smoothie base into a bowl.\n 3)Arrange the toppings (kiwi, banana, raspberries, blueberries, granola, and nuts) artistically on top of the smoothie.\n 4)Serve immediately and enjoy!",
          nutrition: 'Calories: 320, Protein: 6g, Carbs: 48g, Fat: 12g'
        },
        {
          src: 'assets/img/b5.jpg',
          name: 'Breakfast 2',
          description: 'Tasty and nutritious',
          recipe: "",
          nutrition: 'Calories: 250, Protein: 12g, Carbs: 35g'
        },
        {
          src: 'assets/img/b3.jpg',
          name: 'Breakfast 3',
          description: 'Tasty and nutritious',
          recipe: "",
          nutrition: 'Calories: 250, Protein: 12g, Carbs: 35g'
        },
        {
          src: 'assets/img/b4.jpg',
          name: 'Breakfast 4',
          description: 'Tasty and nutritious',
          recipe: "",
          nutrition: 'Calories: 250, Protein: 12g, Carbs: 35g'
        },
        {
          src: 'assets/img/b7.webp',
          name: 'Breakfast 5',
          description: 'Tasty and nutritious',
          recipe: "",
          nutrition: 'Calories: 250, Protein: 12g, Carbs: 35g'
        },
        {
          src: 'assets/img/B11.webp',
          name: 'Breakfast 6',
          description: 'Tasty and nutritious',
          recipe: "",
          nutrition: 'Calories: 250, Protein: 12g, Carbs: 35g'
        },
        {
          src: 'assets/img/B10.jpg',
          name: 'Breakfast 7',
          description: 'Tasty and nutritious',
          recipe: "",
          nutrition: 'Calories: 250, Protein: 12g, Carbs: 35g'
        }
      ]
    },
    {
      type: 'Lunch',
      items: [
        {
          src: 'assets/img/L1.jpg',
          name: 'Lunch 1',
          description: 'Healthy lunch option',
          recipe: "",
          nutrition: 'Calories: 400, Protein: 20g, Carbs: 50g'
        },
        {
          src: 'assets/img/L2.jpg',
          name: 'Lunch 2',
          description: 'Perfect lunch meal',
          recipe: "",
          nutrition: 'Calories: 350, Protein: 18g, Carbs: 45g'
        },
        {
          src: 'assets/img/L3.jpg',
          name: 'Lunch 3',
          description: 'Perfect lunch meal',
          recipe: "",
          nutrition: 'Calories: 350, Protein: 18g, Carbs: 45g'
        },
        {
          src: 'assets/img/L8.webp',
          name: 'Lunch 4',
          description: 'Perfect lunch meal',
          recipe: "",
          nutrition: 'Calories: 350, Protein: 18g, Carbs: 45g'
        },
        {
          src: 'assets/img/L5.jpg',
          name: 'Lunch 5',
          description: 'Perfect lunch meal',
          recipe: "",
          nutrition: 'Calories: 350, Protein: 18g, Carbs: 45g'
        },
        {
          src: 'assets/img/L6.jpeg',
          name: 'Lunch 6',
          description: 'Perfect lunch meal',
          recipe: "",
          nutrition: 'Calories: 350, Protein: 18g, Carbs: 45g'
        },
        {
          src: 'assets/img/L10.jpg',
          name: 'Lunch 7',
          description: 'Perfect lunch meal',
          recipe: "",
          nutrition: 'Calories: 350, Protein: 18g, Carbs: 45g'
        }
      ]
    },
    {
      type: 'Dinner',
      items: [
        {
          src: 'assets/img/D8.jpg',
          name: 'Dinner 1',
          description: 'Tasty dinner meal',
          recipe: "",
          nutrition: 'Calories: 500, Protein: 25g, Carbs: 60g'
        },
        {
          src: 'assets/img/D2.jpg',
          name: 'Dinner 2',
          description: 'Delicious and filling',
          recipe: "",
          nutrition: 'Calories: 450, Protein: 22g, Carbs: 55g'
        },
        {
          src: 'assets/img/D3.jpg',
          name: 'Dinner 3',
          description: 'Delicious and filling',
          recipe: "",
          nutrition: 'Calories: 450, Protein: 22g, Carbs: 55g'
        },
        {
          src: 'assets/img/D4.webp',
          name: 'Dinner 4',
          description: 'Delicious and filling',
          recipe: "",
          nutrition: 'Calories: 450, Protein: 22g, Carbs: 55g'
        },
        {
          src: 'assets/img/D5.jpg',
          name: 'Dinner 5',
          description: 'Delicious and filling',
          recipe: "",
          nutrition: 'Calories: 450, Protein: 22g, Carbs: 55g'
        },
        {
          src: 'assets/img/D6.jpg',
          name: 'Dinner 6',
          description: 'Delicious and filling',
          recipe: "",
          nutrition: 'Calories: 450, Protein: 22g, Carbs: 55g'
        },
        {
          src: 'assets/img/D10.jpg',
          name: 'Dinner 7',
          description: 'Delicious and filling',
          recipe: "",
          nutrition: 'Calories: 450, Protein: 22g, Carbs: 55g'
        }
      ]
    }
  ];
  
  // Selected meal details for the modal
  selectedMeal: any = {
    src: '',
    name: '',
    description: '',
    recipe : "",
    nutrition: ''
  };

  modalVisible: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  // Open modal with selected meal details
  openMealModal(item: any): void {
    this.selectedMeal = item;
    this.modalVisible = true;
  }

  // Close modal
  closeModal(): void {
    this.modalVisible = false;
  }

  // Scroll the meal items left or right
  scrollMealList(meal: any, direction: 'left' | 'right'): void {
    const mealItemsContainer = document.querySelectorAll('.meal-row .meal-items');
    
    mealItemsContainer.forEach(container => {
      if (direction === 'left') {
        container.scrollBy({ left: -150, behavior: 'smooth' });
      } else if (direction === 'right') {
        container.scrollBy({ left: 150, behavior: 'smooth' });
      }
    });
  }
}
