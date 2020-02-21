# This file was generated by a function in Generators/cartFeatureGen.js

Feature: Testing an order with 2 products
	Scenario: 2 products
		Given codebase is version 1
		And user is type basic
		When user adds product to cart
		Then cart should have at least 1 products
		And cart should have no more than 5 products

		Given codebase is version 1
		And user is type basic
		When user adds product to cart
		Then cart should have at least 1 products
		And cart should have no more than 5 products

Feature: Testing an order with 0 products
	Scenario: 0 products
Feature: Testing an order with 6 products
	Scenario: 6 products
		Given codebase is version 1
		And user is type basic
		When user adds product to cart
		Then cart should have at least 1 products
		And cart should have no more than 5 products

		Given codebase is version 1
		And user is type basic
		When user adds product to cart
		Then cart should have at least 1 products
		And cart should have no more than 5 products

		Given codebase is version 1
		And user is type basic
		When user adds product to cart
		Then cart should have at least 1 products
		And cart should have no more than 5 products

		Given codebase is version 1
		And user is type basic
		When user adds product to cart
		Then cart should have at least 1 products
		And cart should have no more than 5 products

		Given codebase is version 1
		And user is type basic
		When user adds product to cart
		Then cart should have at least 1 products
		And cart should have no more than 5 products

		Given codebase is version 1
		And user is type basic
		When user adds product to cart
		Then cart should have at least 1 products
		And cart should have no more than 5 products

