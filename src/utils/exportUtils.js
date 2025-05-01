// Export data as CSV
export const exportToCSV = (data, filename) => {
    if (!data || data.length === 0) {
      console.error('No data to export');
      return;
    }
    
    // Get headers from first data object
    const headers = Object.keys(data[0]);
    const csvHeader = headers.join(',');
    
    // Convert data to CSV rows
    const csvRows = data.map(row => {
      return headers.map(header => {
        // Handle values that might contain commas
        const value = row[header];
        const valueStr = String(value);
        return valueStr.includes(',') ? `"${valueStr}"` : valueStr;
      }).join(',');
    });
    
    // Combine header and rows
    const csvContent = [csvHeader, ...csvRows].join('\n');
    
    // Create download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    // Set link properties
    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}.csv`);
    link.style.visibility = 'hidden';
    
    // Add link to DOM, trigger download, and clean up
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };