<?php
class ControllerExtensionModuleSpecial extends Controller {
	public function index($setting) {
		$this->load->language('extension/module/special');

		if (isset($this->request->get['product_id'])) {
			$product_id = (int)$this->request->get['product_id'];
		} else {
			$product_id = 0;
		}

		$this->load->model('catalog/product');

		$product_info = $this->model_catalog_product->getProduct($product_id);
		

		$this->load->model('tool/image');
		
		$data['products'] = array();

		$filter_data = array(
			'sort'  => 'pd.name',
			'order' => 'ASC',
			'start' => 0,
			'limit' => $setting['limit']
		);
		
		$data['images'] = array();
		$thumb_custom= array();
		
		$results = $this->model_catalog_product->getProductSpecials($filter_data);
		
		
	
		
		if ($results) {
			foreach ($results as $result) {
				if ($result['image']) {
					$image = $this->model_tool_image->resize($result['image'], $setting['width'], $setting['height']);
				} else {
					$image = $this->model_tool_image->resize('placeholder.png', $setting['width'], $setting['height']);
				}
				
				
				$spcimage = $this->model_catalog_product->getProductImages($result['product_id']);
					$thumb_custom= array();								
					foreach ($spcimage as $sp_img) {
						$xyz = $this->model_tool_image->resize($sp_img['image'], $setting['width'], $setting['height']);
						array_push($thumb_custom,$xyz);
				}
				
				
				
				   
				if ($this->customer->isLogged() || !$this->config->get('config_customer_price')) {
					$price = $this->currency->format($this->tax->calculate($result['price'], $result['tax_class_id'], $this->config->get('config_tax')), $this->session->data['currency']);
				} else {
					$price = false;
				}
				
				if ($result['special_end'] && $result['special_end']!='0000-00-00') {
					$data['specialTime'] = $result['special_end'];
				}
				
				
				if ((float)$result['special']) {
					$special = $this->currency->format($this->tax->calculate($result['special'], $result['tax_class_id'], $this->config->get('config_tax')), $this->session->data['currency']);
					$data['specialTime'] = $result['special_end'];
					

					
				} else {
					$special = false;
				}


				if ($this->config->get('config_tax')) {
					$tax = $this->currency->format((float)$result['special'] ? $result['special'] : $result['price'], $this->session->data['currency']);
				} else {
					$tax = false;
				}

				if ($this->config->get('config_review_status')) {
					$rating = $result['rating'];
				} else {
					$rating = false;
				}
				
				
				if ($this->config->get('config_stock_display')) {
						$stock_status  = $result['stock_status'];
						
						} else {
						$stock_status = false;
						
						}
				
				
				$data['products'][] = array(
					'product_id'  => $result['product_id'],
					'thumb'       => $image,
					'name'        => $result['name'],
					'description' => utf8_substr(strip_tags(html_entity_decode($result['description'], ENT_QUOTES, 'UTF-8')), 0, $this->config->get($this->config->get('config_theme') . '_product_description_length')) . '..',
					'price'       => $price,
					'specialTime' => ($result['special_end']=='0000-00-00' || is_null($result['special_end'])) ? false : $result['special_end'],
					'special'     => $special,
					'percentsaving' 	 => round((($result['price'] - $result['special'])/$result['price'])*100, 0),
					'tax'         => $tax,
					'rating'      => $rating,
					'href'        => $this->url->link('product/product', 'product_id=' . $result['product_id']),
					'quick'        => $this->url->link('product/quick_view','&product_id=' . $result['product_id']),
					'quantity'      =>$result['quantity'],
                    'stock'      => $stock_status,
					'thumb_link'   => $thumb_custom
				);
				
			}

			return $this->load->view('extension/module/special', $data);
		}
	}
}