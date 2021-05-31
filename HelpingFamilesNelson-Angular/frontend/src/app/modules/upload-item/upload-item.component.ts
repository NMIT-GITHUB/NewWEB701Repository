import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { TokenStorageService } from '../../_services/token-storage.service';
import { NgForm, FormControl, FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

// interface Category {
//   value: string;
//   viewValue: string;
// }

// interface CategoryGroup {
//   name: string;
//   category: Category[];
// }

@Component({
  selector: 'app-upload-item',
  templateUrl: './upload-item.component.html',
  styleUrls: ['./upload-item.component.css']
})
export class UploadItemComponent implements OnInit {
  form = new FormGroup({
    categoryName: new FormControl('', [Validators.required]),
    size: new FormControl('', [Validators.required]),
    gender: new FormControl(''),
    age: new FormControl(''),
    other: new FormControl(''),
  });


  

  // categoryControl = new FormControl();
  // categoryGroups: CategoryGroup[] = [
  //   {
  //     name: 'Tops',
  //     category: [
  //       {value: 'tshirt-1', viewValue: 'T-Shirt'},
  //       {value: 'longSleeve-2', viewValue: 'Long Sleeve Shirt'},
  //     ]
  //   },
  //   {
  //     name: 'Pants',
  //     category: [
  //       {value: 'jeans-3', viewValue: 'Jeans'},
  //       {value: 'trousers-4', viewValue: 'Trousers'},
  //       {value: 'shorts-5', viewValue: 'Shorts'},
  //     ]
  //   },
  //   {
  //     name: 'Outerwear',
  //     category: [
  //       {value: 'coat-6', viewValue: 'Coat'},
  //       {value: 'jacket-7', viewValue: 'Jacket'},
  //       {value: 'onepiece-8', viewValue: 'One-Piece Suit'},
  //       {value: 'poncho-9', viewValue: 'Poncho'},
  //       {value: 'robecloak-10', viewValue: 'Robe/Cloak'},
  //     ]
  //   },
  //   {
  //     name: 'Footwear',
  //     category: [
  //       {value: 'shoes-11', viewValue: 'Shoes'},
  //       {value: 'socks-12', viewValue: 'Socks'},
  //     ]
  //   },
  //   {
  //     name: 'Fancy',
  //     category: [
  //       {value: 'dress-13', viewValue: 'Dress'},
  //       {value: 'gown-14', viewValue: 'Gown'},
  //       {value: 'skirt-15', viewValue: 'Skirt'},
  //       {value: 'wedding-16', viewValue: 'Wedding Attire'},
  //       {value: 'suit-17', viewValue: 'Suit'},
  //     ]
  //   },
  //   {
  //     name: 'Other',
  //     category: [
  //       {value: 'childrensClothing-18', viewValue: 'Childrens Clothing'},
  //       {value: 'sportswear-19', viewValue: 'Sportswear'},
  //       {value: 'undergarment-20', viewValue: 'Undergarment'},
  //       {value: 'other-21', viewValue: 'Other'},
  //     ]
  //   },
  //   {
  //     name: 'Accessories',
  //     category: [
  //       {value: 'headwear-22', viewValue: 'Headwear'},
  //       {value: 'armwear-23', viewValue: 'Armwear'},
  //       {value: 'mask-24', viewValue: 'Mask'},
  //       {value: 'belt-25', viewValue: 'Belt'},
  //       {value: 'sari-26', viewValue: 'Sari'},
  //       {value: 'sash-27', viewValue: 'Sash'},
  //       {value: 'shawl-28', viewValue: 'Shawl'},
  //       {value: 'misc-29', viewValue: 'Misc'},
  //     ]
  //   },
  // ]
  isSuccessful = false;
  isUploadFailed = false;
  errorMessage = '';
  currentUser: any;
  constructor(private authService: AuthService, private token: TokenStorageService) { }

  //gets the current user object
  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

  //begins the process of uploading an item in the form of an array to a user.
  onSubmit(data: NgForm): void {
    //sends data to authService.upload
    this.authService.upload(this.currentUser.username, data.controls['categoryName'].value, data.controls['size'].value, data.controls['gender'].value, data.controls['age'].value, data.controls['other'].value, ).subscribe(
      data => {
        console.log(data);
        this.currentUser.tokens = data.tokens;
        this.isSuccessful = true;
        this.isUploadFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isUploadFailed = true;
      }
    );
    }

  changeCategory(e: any, data: NgForm): void {
    this.form.controls = e.target.value
    
  }
}



