/**
 * 2007-2019 PrestaShop SA and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */

export default {
  orderPaymentDetailsBtn: '.js-payment-details-btn',
  orderPaymentFormAmountInput: '#order_payment_amount',
  orderPaymentInvoiceSelect: '#order_payment_id_invoice',
  viewOrderPaymentsBlock: '#view_order_payments_block',
  privateNoteToggleBtn: '.js-private-note-toggle-btn',
  privateNoteBlock: '.js-private-note-block',
  privateNoteInput: '#private_note_note',
  privateNoteSubmitBtn: '.js-private-note-btn',
  addCartRuleModal: '#addOrderDiscountModal',
  addCartRuleApplyOnAllInvoicesCheckbox: '#add_order_cart_rule_apply_on_all_invoices',
  addCartRuleInvoiceIdSelect: '#add_order_cart_rule_invoice_id',
  addCartRuleTypeSelect: '#add_order_cart_rule_type',
  addCartRuleValueInput: '#add_order_cart_rule_value',
  addCartRuleValueUnit: '#add_order_cart_rule_value_unit',
  cartRuleHelpText: '.js-cart-rule-value-help',
  updateOrderStatusActionBtn: '#update_order_status_action_btn',
  updateOrderStatusActionInput: '#update_order_status_action_input',
  updateOrderStatusActionForm: '#update_order_status_action_form',
  showOrderShippingUpdateModalBtn: '.js-update-shipping-btn',
  updateOrderShippingTrackingNumberInput: '#update_order_shipping_tracking_number',
  updateOrderShippingCurrentOrderCarrierIdInput: '#update_order_shipping_current_order_carrier_id',
  updateCustomerAddressModal: '#updateCustomerAddressModal',
  openOrderAddressUpdateModalBtn: '.js-update-customer-address-modal-btn',
  updateOrderAddressTypeInput: '#change_order_address_address_type',
  orderMessageNameSelect: '#order_message_order_message',
  orderMessagesContainer: '.js-order-messages-container',
  orderMessage: '#order_message_message',
  orderMessageChangeWarning: '.js-message-change-warning',
  allMessagesModal: '#view_all_messages_modal',
  allMessagesList: '#all-messages-list',
  openAllMessagesBtn: '.js-open-all-messages-btn',
  // Products table elements
  productOriginalPosition: '#orderProductsOriginalPosition',
  productModificationPosition: '#orderProductsModificationPosition',
  productsPanel: '#orderProductsPanel',
  productsCount: '#orderProductsPanelCount',
  productDeleteBtn: '.js-order-product-delete-btn',
  productsTable: '#orderProductsTable',
  productsNavPagination: '#orderProductsNavPagination',
  productsTablePagination: '#orderProductsTablePagination',
  productsTablePaginationNext: '#orderProductsTablePaginationNext',
  productsTablePaginationPrev: '#orderProductsTablePaginationPrev',
  productsTablePaginationLink: '.page-item:not(.d-none):not(#orderProductsTablePaginationNext):not(#orderProductsTablePaginationPrev) .page-link',
  productsTablePaginationActive: '#orderProductsTablePagination .page-item.active span',
  productsTablePaginationTemplate: '#orderProductsTablePagination .page-item.d-none',
  productsTableRow: productId => `#orderProduct_${productId}`,
  productsTableRowEdited: productId => `#editOrderProduct_${productId}`,
  productsCellLocation: 'tr .cellProductLocation',
  productsCellLocationDisplayed: 'tr:not(.d-none) .cellProductLocation',
  productsTableCustomizationRows: '#orderProductsTable .order-product-customization',
  productEditBtn: '.js-order-product-edit-btn',
  productAddBtn: '#addProductBtn',
  productActionBtn: '.js-product-action-btn',
  productAddActionBtn: '#add_product_row_add',
  productCancelAddBtn: '#add_product_row_cancel',
  productAddRow: '#addProductTableRow',
  productSearchInput: '#add_product_row_search',
  productSearchInputAutocomplete: '#addProductTableRow .dropdown',
  productSearchInputAutocompleteMenu: '#addProductTableRow .dropdown .dropdown-menu',
  productAddIdInput: '#add_product_row_product_id',
  productAddTaxRateInput: '#add_product_row_tax_rate',
  productAddCombinationsBlock: '#addProductCombinations',
  productAddCombinationsSelect: '#addProductCombinationId',
  productAddPriceTaxExclInput: '#add_product_row_price_tax_excluded',
  productAddPriceTaxInclInput: '#add_product_row_price_tax_included',
  productAddQuantityInput: '#add_product_row_quantity',
  productAddAvailableText: '#addProductAvailable',
  productAddLocationText: '#addProductLocation',
  productAddTotalPriceText: '#addProductTotalPrice',
  productAddInvoiceSelect: '#add_product_row_invoice',
  productAddFreeShippingSelect: '#add_product_row_free_shipping',
  productAddNewInvoiceInfo: '#addProductNewInvoiceInfo',
  productEditSaveBtn: '.productEditSaveBtn',
  productEditCancelBtn: '.productEditCancelBtn',
  productEditRowTemplate: '#editProductTableRowTemplate',
  productEditRow: '.editProductRow',
  productEditImage: '.cellProductImg',
  productEditName: '.cellProductName',
  productEditPriceTaxExclInput: '.editProductPriceTaxExcl',
  productEditPriceTaxInclInput: '.editProductPriceTaxIncl',
  productEditInvoiceSelect: '.editProductInvoice',
  productEditQuantityInput: '.editProductQuantity',
  productEditLocationText: '.editProductLocation',
  productEditAvailableText: '.editProductAvailable',
  productEditTotalPriceText: '.editProductTotalPrice',
  // Product Pack Modal
  productPackModal: {
    modal: '#product-pack-modal',
    table: '#product-pack-modal-table tbody',
    rows: '#product-pack-modal-table tbody tr:not(#template-pack-table-row)',
    template: '#template-pack-table-row',
    product: {
      img: '.cell-product-img img',
      link: '.cell-product-name a',
      name: '.cell-product-name .product-name',
      ref: '.cell-product-name .product-reference',
      supplierRef: '.cell-product-name .product-supplier-reference',
      quantity: '.cell-product-quantity',
      availableQuantity: '.cell-product-available-quantity',
    },
  },
  // Order price elements
  orderProductsTotal: '#orderProductsTotal',
  orderDiscountsTotal: '#orderDiscountsTotal',
  orderWrappingTotal: '#orderWrappingTotal',
  orderShippingTotal: '#orderShippingTotal',
  orderTaxesTotal: '#orderTaxesTotal',
  orderTotal: '#orderTotal',
  orderHookTabsContainer: '#order_hook_tabs',
  // Product cancel/refund elements
  cancelProduct: {
    form: 'form[name="cancel_product"]',
    buttons: {
      abort: 'button.cancel-product-element-abort',
      save: '#cancel_product_save',
      partialRefund: 'button.partial-refund-display',
      standardRefund: 'button.standard-refund-display',
      returnProduct: 'button.return-product-display',
      cancelProducts: 'button.cancel-product-display',
    },
    inputs: {
      quantity: '.cancel-product-quantity input',
      amount: '.cancel-product-amount input',
      selector: '.cancel-product-selector input',
    },
    table: {
      cell: '.cancel-product-cell',
      header: 'th.cancel-product-element p',
      actions: 'td.cellProductActions, th.product_actions',
    },
    checkboxes: {
      restock: '#cancel_product_restock',
      creditSlip: '#cancel_product_credit_slip',
      voucher: '#cancel_product_voucher',
    },
    radios: {
      voucherRefundType: {
        productPrices: 'input[voucher-refund-type="0"]',
        productPricesVoucherExcluded: 'input[voucher-refund-type="1"]',
        negativeErrorMessage: '.voucher-refund-type-negative-error',
      },
    },
    toggle: {
      partialRefund: '.cancel-product-element:not(.hidden):not(.shipping-refund), .cancel-product-amount',
      standardRefund: '.cancel-product-element:not(.hidden):not(.shipping-refund-amount):not(.restock-products), .cancel-product-selector',
      returnProduct: '.cancel-product-element:not(.hidden):not(.shipping-refund-amount), .cancel-product-selector',
      cancelProducts: '.cancel-product-element:not(.hidden):not(.shipping-refund):not(.restock-products):not(.refund-credit-slip):not(.refund-voucher), .cancel-product-selector',
    },
  },
};
