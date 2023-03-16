// Paste in leetcode: https://leetcode.com/problems/best-time-to-buy-and-sell-stock

func maxProfit(prices []int) int {
	profitMax := 0
	priceMin := prices[0]
	for i := 0; i < len(prices); i++ {
		if prices[i] < priceMin {
			priceMin = prices[i]
			continue
		}
		profit := prices[i] - priceMin
		if profit > profitMax {
			profitMax = profit
		}
	}
	return profitMax
}
