# Calorage / Калораж

[🇺🇸 English](#english-version) | [🇺🇦 Українська](#українська-версія)

---

## English Version

My first experience with React. This small web application itself offers to interact with foods by counting their calorie content, calculating a person's calorie intake (based on facts such as “Age”, “Weight”, etc.), and every 24 hours, the data on calorie intake per day is reset to zero.

### Main functions

- You can add this or that product yourself (even if it's your special recipe)
- It is possible to calculate the daily calorie intake, taking into account all the necessary facts
- If the product was wrong, you can delete it or replace any of the parameters in it
- Every 24 hours, localstorage is updated (i.e., all data on calories already consumed is saved for 24 hours)

### Known issues

- On the one hand, this is not a disadvantage, because there are “exclusive” or “proprietary” recipes for certain products. But on the other hand, the calorie values for such conventional foods as soup, burger, apple should be known (for example, using a database).

---

## Українська версія

Перший мій досвід із React. Сам цей невеликий веб-додаток пропонує взаємодіяти з продуктами, рахуючи їхню калорійність, вираховуючи норму споживання калорій людини (з огляду на такі факти, як «Вік», «Вага», тощо), а також кожні 24 години - дані про споживання калорій на добу обнуляються.

### Основні функції

- Є можливість самому додавати той чи інший продукт (навіть якщо це якийсь ваш особливий рецепт)
- Є можливість порахувати денну норму калорій, враховуючи всі необхідні факти
- Якщо ж продукт був помилковим - його можна видалити або ж замінити в ньому якийсь із параметрів
- Кожні 24 години відбувається оновлення localstorage (тобто, протягом 24 годин, всі дані про вже вжиті калорії зберігаються)

### Відомі проблеми

- З одного боку, це не мінус, адже є «ексклюзивні» або «свої» рецепти тих чи інших продуктів. Але з іншого боку - значення калорій для таких умовних продуктів, як: суп, бургер, яблуко - мають бути відомі (наприклад за допомогою Бази даних).
