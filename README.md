# Assignment Analysis and Observations

## Patterns Observed in the Dataset

1. **Cluster Shift Effects:**
   - As the shift distance between clusters increases, the separation between classes becomes clearer. This is reflected in the tightening decision boundary around the two distinct classes.
   - For smaller shifts, the overlap between classes is significant, leading to a wider margin and higher classification uncertainty.

2. **Decision Boundary Behavior:**
   - With increasing shift distance, the decision boundary becomes steeper and more aligned with the actual separation between clusters.
   - Margins shrink as clusters separate because the logistic regression model identifies the boundary with higher confidence.

3. **Effect on Margin Width:**
   - For small shifts, the margin width is larger as the model struggles to distinguish the classes.
   - Larger shifts lead to reduced margin width, as the separation between classes becomes well-defined.

---

## Parameter Relationships and Trends

1. **Intercept $$\(\beta_0\)$$ and Coefficients $$\(\beta_1, \beta_2\)$$:**
   - The intercept $$\(\beta_0\)$$ becomes more negative with increasing shift distance, reflecting a steeper decision boundary.
   - The coefficients $$\(\beta_1, \beta_2\)$$ for $$x_1\$$ and $$x_2\$$ grow positively, indicating that the features are more strongly associated with class predictions as separation improves.

2. **Slope $$\(\beta_1 / \beta_2\)$$:**
   - The slope changes as the decision boundary adjusts to better fit the separation in data. A larger slope indicates a steeper boundary.

3. **Intercept Ratio $$\(\beta_0 / \beta_2\)$$:**
   - The intercept-to-coefficient ratio reflects the positioning of the decision boundary relative to the data distribution.

4. **Logistic Loss:**
   - The logistic loss decreases with increasing cluster separation as the model's predictions become more accurate.

---

## Key Observations

1. **Relation Between Parameters:**
   - Increasing $$beta_1\$$ and $$beta_2\$$ coefficients reflect stronger feature contributions to the decision boundary as the clusters shift apart.
   - The margin width and logistic loss are inversely related to the shift distance; more separation reduces uncertainty and improves classification confidence.

2. **Practical Implication:**
   - Clearer separation (higher shift) between clusters leads to a well-defined decision boundary with smaller loss, enabling a more accurate classification model.
   - For overlapping clusters, the model parameters adjust to maximize separation, resulting in higher loss and broader margins.

