class Api::V1::RankingsController < ApplicationController
  require 'net/http'

  def index
    @products = products(current_condition)
  rescue JSON::ParserError
    @products = []
  ensure
    @countries = Country.order(name: :asc)
    render json: [@products, @countries]
  end

  private

  def products(country:, product:, type:)
    uri = URI.parse("https://rss.itunes.apple.com/api/v1/#{country}/#{product}/#{type}/all/200/explicit.json")
    json = Net::HTTP.get(uri)
    JSON.parse(json)['feed']['results']
  end

  def current_condition
    @current_country = params[:country] || 'US'
    @current_product = params[:product] || 'ios-apps'
    @current_type = params[:type] || 'top-free'

    {
      country: @current_country,
      product: @current_product,
      type: @current_type
    }
  end
end
