# sm4llVTONs: A Family of Specialized Virtual Try-On Models

---

Authors: [Andrea Baioni](mailto:andrea@andreabaioni.com), [Alex Puliatti](mailto:a@puliatti.com)

---

sm4llVTONs (same methodology 4 all VTON) is a new family of highly efficient and specialized diffusion models for virtual try-on (VTON) applications, and more. This page provides an overview of our current models, methodology, and performance benchmarks. 

---

### Our Current Models

The sm4llVTONs family consists of several models, each an expert in a specific VTON domain. 

| Model Name       | Task                     | Status  |
| ---------------- | ------------------------ | ------- |
| sm4ll-eye        | Sunglasses & Eyewear     | Pre-release |
| sm4ll-shoes      | Shoes & Footwear         | Pre-release |
| sm4ll-face       | Face Swapping            | Beta    |
| sm4ll-top        | Upper Body Garments      | Alpha   |
| sm4ll-bottom     | Lower Body Garments      | Alpha   |
| sm4ll-dress      | Dresses                  | Alpha   |
| sm4ll-bg         | Background Replacement   | Alpha   |

### Key Philosophy & Features

Our work is guided by a core philosophy that distinguishes it from general-purpose VTON and image editing models. Instead of a single, large model that handles many tasks, sm4llVTONs are experts fine-tuned for a single purpose. This results in higher fidelity, better detail preservation, and more intuitive control. Our methodology is built around a "train-like-you-infer" principle, ensuring that our models perform reliably on in-the-wild images, not just curated datasets.

## Results

### Glasses
| Example 1 | Example 2 | Example 3 | Example 4 |
| :---: | :---: | :---: | :---: |
| <img src="Assets/glass_1.jpg" alt="Glasses Example 1" width="200"/> | <img src="Assets/glass_2.jpg" alt="Glasses Example 2" width="200"/> | <img src="Assets/glass_3.jpg" alt="Glasses Example 3" width="200"/> | <img src="Assets/glass_4.jpg" alt="Glasses Example 4" width="200"/> |

### Top
| Example 1 | Example 2 | Example 3 | Example 4 |
| :---: | :---: | :---: | :---: |
| <img src="Assets/top_1.jpg" alt="Top Garment Example 1" width="200"/> | <img src="Assets/top_2.jpg" alt="Top Garment Example 2" width="200"/> | <img src="Assets/top_3.jpg" alt="Top Garment Example 3" width="200"/> | <img src="Assets/top_4.jpg" alt="Top Garment Example 4" width="200"/> |

### Bottom
| Example 1 | Example 2 | Example 3 | Example 4 |
| :---: | :---: | :---: | :---: |
| <img src="Assets/bottom_1.jpg" alt="Bottom Garment Example 1" width="200"/> | <img src="Assets/bottom_2.jpg" alt="Bottom Garment Example 2" width="200"/> | <img src="Assets/bottom_3.jpg" alt="Bottom Garment Example 3" width="200"/> | <img src="Assets/bottom_4.jpg" alt="Bottom Garment Example 4" width="200"/> |

### Dresses
| Example 1 | Example 2 | Example 3 | Example 4 |
| :---: | :---: | :---: | :---: |
| <img src="Assets/dress_1.jpg" alt="Dress Example 1" width="200"/> | <img src="Assets/dress_2.jpg" alt="Dress Example 2" width="200"/> | <img src="Assets/dress_3.jpg" alt="Dress Example 3" width="200"/> | <img src="Assets/dress_4.jpg" alt="Dress Example 4" width="200"/> |

### Shoes
| Example 1 | Example 2 | Example 3 | Example 4 |
| :---: | :---: | :---: | :---: |
| <img src="Assets/shoes_1.jpg" alt="Shoes Example 1" width="200"/> | <img src="Assets/shoes_2.jpg" alt="Shoes Example 2" width="200"/> | <img src="Assets/shoes_3.jpg" alt="Shoes Example 3" width="200"/> | <img src="Assets/shoes_4.jpg" alt="Shoes Example 4" width="200"/> |

### Qualitative results and creative production pipeline

- **Flux Kontext**: We struggled to find a consistent prompt structure for desired image modifications. Results shown are the best achievable but may not represent the model's full potential.
- **GPT-4o**: Produces aesthetically pleasing images but often generates a new image rather than modifying the original, which is unsuitable for production environments.
- **FASHN.ai**: Unique in its predictive approach to autosegmentation. Some poor results are likely due to limitations in the segmentation system, not the underlying model.
- **CatVTON Flux**: Performs well in generalization, even with out-of-scope items like eyewear and shoes, despite being trained on a dataset optimized for garments.

**Real World Fashion Production Pipelines**

There are currently multiple ways to generate images of people wearing product, but most of them do not fully integrate in traditional production pipelines. As shown in the below example, VTON models should be able to be integrated in a complex system where each image is approved throughout different stages and people in a corporate environment.

Some of the most commonly known models, like GPT-4o, cannot satisfy this need, as the images it generates are always slight variations of both the product and the underlying asset. Other models, like CatVTON or other commercially available VTONs, do not reach the desired level of fidelity when generating products, or suffer from poor masking quality that ends up changing the full outfits in a significant way.

<img src="Assets/prodpipeline1.jpeg" alt="A simple example of what a commercial production pipeline looks like" width="720"/>

Although these benchmarks are from a preliminary testing phase and a more in-depth evaluation is ongoing, the sm4ll model family has demonstrated consistently stronger performance compared to the other models in the following areas:

Delivering accurate results through models specialized in specific product categories.
Being able to minimally affect the underlying input image(s) while retaining product precision, which is, in our experience, a relevant concern in real-world production pipelines.
Due to our time spent working with and talking to the Creative, Marketing, and Product departments at global brands, we believe that expert models would satisfy both of the above needs.

Another way to solve these needs would be to train single LoRAs on every product. While our results are highly competitive with single-product, single-view LoRAs, the slight trade-off in quality is strategically outweighed by the scalability factor of not needing to train a unique model for every product. Training LoRAs is time and resource intensive, and often necessitates a higher degree of automation than VTON models if companies wish to develop a truly scalable system.

The necessary degree of precision and fidelity is also different whether the models are used in a B2B or a B2B2C (or B2C) setting. For bigger campaigns and marketing efforts, LoRAs provide a higher degree of fidelity than VTON models, however specialized they are. On the other hand, if the effort is geared towards letting marketplace users try on products, specialized VTONs are faster to deploy than both LoRAs and regular AR solutions.

---
### Roadmap
- [x] Release HuggingFace Gradio demo
- [ ] Release Alpha models for Eyewear and Shoes (768px)
- [ ] Release Alpha models for other categories (768px)
- [ ] Release Paper
---

The sm4llVTONs family of models represents a significant step forward in specialized virtual try-on applications. By focusing on lightweight, expert models and a "train-like-you-infer" methodology, we achieve high-fidelity results that are robust to real-world conditions. Future work will involve releasing the full research paper with detailed benchmarks and continuing the development of our alpha and beta models.

---

## BibTeX

```bibtex
@inproceedings{sm4llVTONs2025,
  title={sm4llVTONs: A Family of Specialized Virtual Try-On Models},
  author={Andrea Baioni and Alex Puliatti},
  year={2025}
}
