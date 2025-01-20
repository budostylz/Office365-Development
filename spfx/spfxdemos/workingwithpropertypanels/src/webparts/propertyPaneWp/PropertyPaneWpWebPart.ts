import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneToggle
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import type { IReadonlyTheme } from '@microsoft/sp-component-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './PropertyPaneWpWebPart.module.scss';

export interface IPropertyPaneWpWebPartProps {
  description: string;

  productname: string;
  productdescription: string;
  productcost: number;
  quantity: number;
  billamount: number;
  discount: number;
  netbillamount: number;

  currentTime: Date;
  IsCertified: boolean;
  Rating: number;
  processortype: string;
  InvoiceFileType: string;
  newProcessorType: string;
  discountCoupon: boolean;


}

export default class PropertyPaneWpWebPart extends BaseClientSideWebPart<IPropertyPaneWpWebPartProps> {

  private _isDarkTheme: boolean = false;




  public render(): void {
    // Parse product cost and quantity as numbers
    const productCost = parseFloat(this.properties.productcost as unknown as string) || 0;
    const quantity = parseFloat(this.properties.quantity as unknown as string) || 0;

    // Perform calculations
    const billAmount = productCost * quantity;
    const discount = billAmount * 0.1; // 10% discount
    const netBillAmount = billAmount - discount;

    this.domElement.innerHTML = `
      <section class="${styles.propertyPaneWp} ${!!this.context.sdks.microsoftTeams ? styles.teams : ''}">
 <div class="${styles.welcome}">
        <img alt="" src="${this._isDarkTheme ? require('./assets/welcome-dark.png') : require('./assets/welcome-light.png')}" class="${styles.welcomeImage}" />
        <h2>Well done, ${escape(this.context.pageContext.user.displayName)}!</h2>
        <div>Web part property value: <strong>${escape(this.properties.description)}</strong></div>
      </div>        
      <table>
          <tr>
            <td>Product Name</td>
            <td>${escape(this.properties.productname || 'N/A')}</td>
          </tr>
          <tr>
            <td>Product Description</td>
            <td>${escape(this.properties.productdescription || 'N/A')}</td>
          </tr>
          <tr>
            <td>Product Cost</td>
            <td>${productCost}</td>
          </tr>
          <tr>
            <td>Quantity</td>
            <td>${quantity}</td>
          </tr>
          <tr>
            <td>Bill Amount</td>
            <td>${billAmount}</td>
          </tr>
          <tr>
            <td>Discount (10%)</td>
            <td>${discount}</td>
          </tr>
          <tr>
            <td>Net Bill Amount</td>
            <td>${netBillAmount}</td>
          </tr>
          <tr>
            <td>Is Certified</td>
            <td>${this.properties.IsCertified}</td>
          </tr>

        </table>
      </section>`;
  }


  protected onInit(): Promise<void> {
    return new Promise<void>((resolve, _reject) => {
      console.log('IN PROMISE');
      this.properties.productname = "Mouse";
      this.properties.productdescription = "Mouse Description";
      this.properties.quantity = 500;
      this.properties.productcost = 300;

      if (this.properties.currentTime === undefined) {
        const dtCurrent: Date = new Date();
        dtCurrent.setDate(dtCurrent.getDate() + 1);
        this.properties.currentTime = dtCurrent;
      }
      resolve(undefined);
    });

   
  }

  protected get disableReactivePropertyChanges(): boolean {   
    return false;
  }




  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    this._isDarkTheme = !!currentTheme.isInverted;
    const {
      semanticColors
    } = currentTheme;

    if (semanticColors) {
      this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
      this.domElement.style.setProperty('--link', semanticColors.link || null);
      this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
    }

  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  /*protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            //description: strings.PropertyPaneDescription
            description: "My Header Description"

          },
          groups: [
            {
              //groupName: strings.BasicGroupName,
              groupName: "My Group Name",

              groupFields: [
                PropertyPaneTextField('description', {
                  //label: strings.DescriptionFieldLabel
                  label: "My New Label"
                })
              ]
            }
          ]
        }
      ]
    };
  } */

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {

          groups: [
            {
              groupName: "Product Details",
              groupFields: [
                PropertyPaneTextField('productname', {
                  label: "Product Name",
                  multiline: false,
                  resizable: false,
                  deferredValidationTime: 5000,
                  placeholder: "Please enter product name", "description": "Name property field"
                }),
                PropertyPaneTextField('productdescription', {
                  label: "Product Description",
                  multiline: true,
                  resizable: false,
                  deferredValidationTime: 5000,
                  placeholder: "Please enter product description", "description": "Description property field"
                }),
                PropertyPaneTextField('productcost', {
                  label: "Product Cost",
                  multiline: false,
                  resizable: false,
                  deferredValidationTime: 5000,
                  placeholder: "Please enter product cost", "description": "Name property field"
                }),
                PropertyPaneTextField('quantity', {
                  label: "Product Quantity",
                  multiline: false,
                  resizable: false,
                  deferredValidationTime: 5000,
                  placeholder: "Please enter product quantity", "description": "Quantity property field"
                }),

                PropertyPaneToggle('IsCertified', {
                  key: 'IsCertified',
                  label: 'Is it Certified',
                  onText: 'Yes',
                  offText: 'Not an ISI Certified Product'
                })

              ]
            }
          ]
        }
      ]

    }


  }


}
